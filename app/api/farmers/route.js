import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const farmerData = await request.json()
        const existingUser = await db.user.findMany({
            where: {
                id: farmerData.userId
            }
        })
        if(!existingUser){
            return NextResponse.json(
                {
                    data: null,
                    message: `No user found`
                }, {status: 404}
            )
        }
        const updatedUser = await db.user.update({
            where: {
                id: farmerData.userId
            },
            data: {
                emailVerified: true
            }
        })
        const newFarmerProfile = await db.farmerProfile.create({
            data: {
                code:farmerData.code,
                contactPerson: farmerData.contactPerson,
                contactPersonPhone: farmerData.contactPersonPhone,
                profileImageUrl: farmerData.profileImageUrl,
                email: farmerData.email,
                title: farmerData.title,
                notes: farmerData.notes,
                phone: farmerData.phone,
                physicalAddress: farmerData.physicalAddress,
                terms: farmerData.terms,
                isActive: farmerData.isActive,
                landSize: parseFloat(farmerData.landSize),
                products: farmerData.products,
                mainCrop: farmerData.mainCrop,
                userId: farmerData.userId
            }            
        })
        console.log(newFarmerProfile)
        return NextResponse.json(newFarmerProfile)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            error: 'Failed to create farmer',
        },{status:500}
        )
    }
}
export async function GET(request){
    try {
        const profiles = await db.farmerProfile.findMany({
            orderBy: {
                createdAt: 'desc'
            }
    })
        return NextResponse.json(profiles)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch profile',
            error
        },{status:500}
        )
    }
}