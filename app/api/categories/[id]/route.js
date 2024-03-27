import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const category = await db.category.findUnique({
            where: {
                id
            },
            include:{
                products:true
            }
    })
        return NextResponse.json(category)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch category',
            error
        },{status:500}
        )
    }
}