import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const product = await db.product.findUnique({
            where: {
                id
            }
    })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch product',
            error
        },{status:500}
        )
    }
}

export async function DELETE(request, {params:{id}}){
    try {
        const existingProduct= await db.product.findUnique({
            where: {
                id
            }
    })
    if(!existingProduct){
        return NextResponse.json({
            data: null,
            message: "Product not found"
        },{status:404})
    }
    const deletedProduct = await db.product.delete({
        where: {
            id
        }
    })
        return NextResponse.json(deletedProduct)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to delete product',
            error
        },{status:500}
        )
    }
}