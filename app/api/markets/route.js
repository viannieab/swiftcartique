import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const {
            categoryId,
            description,
            isActive,
            imageUrl,
            slug,
            title
        } = await request.json()
        const existingMarket = await db.market.findUnique({
            where:{
                slug
            }
        })
        if(existingMarket){
            return NextResponse.json({
                data: null, 
                message: 'Market already exists'
            },{
                status:409
            })
        }
        const newMarket = await db.market.create({
            data: {
                categoryId,
                description,
                isActive,
                imageUrl,
                slug,
                title
            }
        })
        return NextResponse.json(newMarket)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            error: 'Failed to create market',
        },{status:500}
        )
    }
}

export async function GET(request){
    try {
        const markets = await db.market.findMany({
            orderBy: {
                createdAt: 'desc'
            }
    })
        return NextResponse.json(markets)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch markets',
            error
        },{status:500}
        )
    }
}