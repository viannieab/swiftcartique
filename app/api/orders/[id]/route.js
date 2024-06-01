import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const orders = await db.order.findUnique({
            where: {
                id
            },
            include: {
                orderItems: true
            }
    })
        return NextResponse.json(orders)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch an order',
            error
        },{status:500}
        )
    }
}

export async function DELETE(request, {params:{id}}){
    try {
        const existingOrder = await db.order.findUnique({
            where: {
                id
            }
    })
    if(!existingOrder){
        return NextResponse.json({
            data: null,
            message: "Order not found"
        },{status:404})
    }
    const deletedOrder = await db.order.delete({
        where: {
            id
        }
    })
        return NextResponse.json(deletedOrder)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to delete order',
            error
        },{status:500}
        )
    }
}

// export async function PUT(request, {params:{id}}){
//     try{
//         const {title, slug, categoryId, imageUrl, description, isActive, content} = await request.json()
//         const existingTraining = await db.training.findUnique({
//             where:{
//                 id
//             }
//         })
//         if(!existingTraining){
//             return NextResponse.json({
//                 data: null, 
//                 message: 'Training not found'
//             },{
//                 status:404
//             })
//         }
//         const updateTraining = await db.training.update({
//             where:{
//                 id
//             },
//             data: {
//                 title, slug, categoryId, imageUrl, description, isActive, content
//             }
//         })
//         return NextResponse.json(updateTraining)
//     } catch(error){
//         console.log(error)
//         return NextResponse.json({
//             message: 'Failed to update training',
//             error
//         },{status:500}
//         )
//     }
// }