import db from "@/lib/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import base64url from 'base64url'
import {Resend} from "resend"
import {EmailTemplate} from "@/components/EmailTemplate"

export async function POST(request){
   try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    //extract the credentials
    const {name, email, password, role} = await request.json()

    //check if the user already exists in the db
    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })
    console.log(email)
    if(existingUser) {
        return NextResponse.json({
           data: null,
           message: 'User already exists' 
        },{status:409})
    }
    //Encrypt the password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)
    //Generate Token
    // Generate a random UUID (version 4)
    const rawToken = uuidv4();
    console.log(rawToken);
    // Encode the token using Base64 URL-safe format
    const token = base64url.encode(rawToken);
    // Create a User in the DB
    const newUser = await db.user.create({
        data: {
            name, 
            email, 
            password:hashedPassword, 
            role,
            verificationToken: token,
        }
    })
    console.log(newUser)
    //Send the email if user role == Farmer
    if(role === "Farmer"){
        console.log("first")
        //Send an Email with the Token on the link as a search param
        const userId = newUser.id
        const linkText = "Verify Account"
        const redirectUrl = `onboarding/${userId}?token=${token}`
        const description = "Thank you, for Creating an Account with Us. We request you to click on the link Below in order to Complete your Onboarding Process. Thankyou"
        const subject = "Account Verification - SwiftCartique"
        const sendMail = await resend.emails.send({
            from: "SwiftCartique <info@flakolimited.com>",
            to: email,
            subject: subject,
            react: EmailTemplate({ name, redirectUrl, linkText, description, subject }),
        });
        console.log(sendMail);
        //Upon Click redirect them to the login
    }
    return NextResponse.json({
        data: newUser,
        message: "User created successfully",
    },{status:201})
   } catch (error) {
    console.log(error)
        return NextResponse.json({
            error,
            message: 'Server Error: Something went wrong',
        },{status:500}
        )
   } 
}
export async function GET(request){
    try {
        const users = await db.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
    })
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch user',
            error
        },{status:500}
        )
    }
}