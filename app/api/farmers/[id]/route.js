import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const farmer = await db.farmerProfile.findUnique({
            where: {
                id
            }
    })
        return NextResponse.json(farmer)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch farmer',
            error
        },{status:500}
        )
    }
}

export async function DELETE(request, {params:{id}}){
    try {
        const existingFarmer = await db.farmerProfile.findUnique({
            where: {
                id
            }
    })
    if(!existingFarmer){
        return NextResponse.json({
            data: null,
            message: "Farmer not found"
        },{status:404})
    }
    const deletedFarmer = await db.farmerProfile.delete({
        where: {
            id
        }
    })
        return NextResponse.json(deletedFarmer)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to delete farmer',
            error
        },{status:500}
        )
    }
}