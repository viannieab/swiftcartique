// import db from "@/lib/db"
// import { NextResponse } from "next/server"

// export async function POST(request){
//     try{
//         const { PrismaClient } = require('@prisma/client')
//         const prisma = new PrismaClient()
//         const {                
//             checkoutFormData, 
//             orderItems 
//         } = await request.json()
//         const {
//             city,
//             country,
//             email,
//             fname,
//             lname,
//             paymentMethod,
//             phone,
//             shippingCost,
//             streetAddress,
//             userId,
//             zipCode
//         } = checkoutFormData
//         const newOrder = await db.order.create({
//                 data: {
//                     userId,
//                     fname,
//                     lname,
//                     email,
//                     phone,
//                     streetAddress,
//                     city,
//                     country,
//                     zipCode,
//                     shippingCost:parseFloat(shippingCost),
//                     paymentMethod,
//                 }
//             })
//                 //create order item
//                 if (newOrder) {
//                     const orderItemData = orderItems.map(item => ({
//                         productId: item.id,
//                         quantity: parseInt(item.qty),
//                         price: parseFloat(item.salePrice),
//                         orderId: newOrder.id,
//                         user: { connect: { id: userId } }
//                     }));
        
//                     const newOrderItems = await prisma.orderItem.createMany({
//                         data: orderItemData
//                     });
        
//                     console.log(newOrder, newOrderItems);
//                 }
//             return NextResponse.json(newOrder)
//     } catch(error){
//         console.log(error)
//         return NextResponse.json({
//             message: 'Failed to create order',
//             error
//         },{status:500}
//         )
//     }
// }
// export async function GET(request){
//     try {
//         const orders = await db.order.findMany({
//             orderBy: {
//                 createdAt: 'desc'
//             }
//     })
//         return NextResponse.json(orders)
//     } catch (error) {
//         return NextResponse.json({
//             message: 'Failed to fetch orders',
//             error
//         },{status:500}
//         )
//     }
// }

import db from "@/lib/db";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client outside of the request handler to enable connection pooling
const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const { checkoutFormData, orderItems } = await request.json();
        const {
            city,
            country,
            email,
            fname,
            lname,
            paymentMethod,
            phone,
            shippingCost,
            streetAddress,
            userId,
            zipCode
        } = checkoutFormData;

        const newOrder = await db.order.create({
            data: {
                userId,
                fname,
                lname,
                email,
                phone,
                streetAddress,
                city,
                country,
                zipCode,
                shippingCost: parseFloat(shippingCost),
                paymentMethod,
            }
        });

        // Create order items if newOrder was created successfully
        if (newOrder) {
            const orderItemData = orderItems.map(item => ({
                productId: item.id,
                quantity: parseInt(item.qty),
                price: parseFloat(item.salePrice),
                orderId: newOrder.id,
                userId: userId, // Assuming you want to link back to the user, adjust according to your schema
            }));

            const newOrderItems = await prisma.orderItem.createMany({
                data: orderItemData
            });

            console.log(newOrder, newOrderItems);
        }

        return NextResponse.json(newOrder);
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            message: 'Failed to create order',
            error: error.message
        }), { status: 500 });
    }
}

export async function GET(request) {
    try {
        const orders = await db.order.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(orders);
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            message: 'Failed to fetch orders',
            error: error.message
        }), { status: 500 });
    }
}
