import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const {                
            title, 
            slug, 
            categoryId,
            imageUrl, 
            description,
            isActive,
            content} = await request.json()
            console.log({                
                title, 
                slug, 
                categoryId,
                imageUrl, 
                description,
                isActive,
                content})
        const existingTraining = await db.training.findUnique({
                where:{
                    slug
                }
            })
            if(existingTraining ){
                return NextResponse.json({
                    data: null, 
                    message: 'Training already exists'
                },{
                    status:409
                })
            }
            const newTraining = await db.training.create({
                data: {
                    title, 
                    slug, 
                    categoryId,
                    imageUrl, 
                    description,
                    isActive,
                    content
                }
            })
            return NextResponse.json(newTraining)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: 'Failed to create training',
            error
        },{status:500}
        )
    }
}
export async function GET(request){
    try {
        const trainings = await db.training.findMany({
            orderBy: {
                createdAt: 'desc'
            }
    })
        return NextResponse.json(trainings)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch trainings',
            error
        },{status:500}
        )
    }
}