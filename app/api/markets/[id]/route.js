import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const makert = await db.market.findUnique({
            where: {
                id
            }
    })
        return NextResponse.json(makert)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch market',
            error
        },{status:500}
        )
    }
}

export async function DELETE(request, {params:{id}}){
    try {
        const existingMarket = await db.market.findUnique({
            where: {
                id
            }
    })
    if(!existingMarket){
        return NextResponse.json({
            data: null,
            message: "Market not found"
        },{status:404})
    }
    const deletedMarket = await db.market.delete({
        where: {
            id
        }
    })
        return NextResponse.json(deletedMarket)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to delete market',
            error
        },{status:500}
        )
    }
}