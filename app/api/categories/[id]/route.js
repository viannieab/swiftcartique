import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const categories = await db.category.findUnique({
            where: {
                id
            },
            include:{
                products:true
            }
    })
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch category',
            error
        },{status:500}
        )
    }
}

export async function DELETE(request, {params:{id}}){
    try {
        const existingCategory = await db.category.findUnique({
            where: {
                id
            }
    })
    if(!existingCategory){
        return NextResponse.json({
            data: null,
            message: "Category not found"
        },{status:404})
    }
    const deletedCategory = await db.category.delete({
        where: {
            id
        }
    })
        return NextResponse.json(deletedCategory)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to delete category',
            error
        },{status:500}
        )
    }
}

export async function PUT(request, {params:{id}}){
    try{
        const {title, slug, imageUrl, description, isActive} = await request.json()
        const existingCategory = await db.category.findUnique({
            where:{
                id
            }
        })
        if(!existingCategory){
            return NextResponse.json({
                data: null, 
                message: 'Category not found'
            },{
                status:404
            })
        }
        const updateCategory = await db.category.update({
            where:{
                id
            },
            data: {
                title, slug, imageUrl, description, isActive
            }
        })
        return NextResponse.json(updateCategory)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: 'Failed to update category',
            error
        },{status:500}
        )
    }
}