import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const training = await db.training.findUnique({
            where: {
                id
            }
    })
        return NextResponse.json(training)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch training',
            error
        },{status:500}
        )
    }
}

export async function DELETE(request, {params:{id}}){
    try {
        const existingTraining = await db.training.findUnique({
            where: {
                id
            }
    })
    if(!existingTraining){
        return NextResponse.json({
            data: null,
            message: "Training not found"
        },{status:404})
    }
    const deletedTraining = await db.training.delete({
        where: {
            id
        }
    })
        return NextResponse.json(deletedTraining)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to delete training',
            error
        },{status:500}
        )
    }
}

export async function PUT(request, {params:{id}}){
    try{
        const {title, slug, categoryId, imageUrl, description, isActive, content} = await request.json()
        const existingTraining = await db.training.findUnique({
            where:{
                id
            }
        })
        if(!existingTraining){
            return NextResponse.json({
                data: null, 
                message: 'Training not found'
            },{
                status:404
            })
        }
        const updateTraining = await db.training.update({
            where:{
                id
            },
            data: {
                title, slug, categoryId, imageUrl, description, isActive, content
            }
        })
        return NextResponse.json(updateTraining)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: 'Failed to update training',
            error
        },{status:500}
        )
    }
}