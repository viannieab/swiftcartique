import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const {title, slug, imageUrl, description, isActive} = await request.json()
        const newCategory = {title, slug, imageUrl, description, isActive}
        const existingCategory = await db.category.findUnique({
            where:{
                slug
            }
        })
        if(existingCategory){
            return NextResponse.json({
                data: null, 
                message: 'Category already exists'
            },{
                status:409
            })
        }
        const category = await db.category.create({
            data: newCategory
        })
        return NextResponse.json(newCategory)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: 'Failed to create category',
            error
        },{status:500}
        )
    }
}
export async function GET(request){
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: 'desc'
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