import db from "@/lib/db"
import { NextResponse } from "next/server"
// import { connect } from "react-redux";

export async function POST(request) {
    try {
        const {
            checkoutFormData,
            orderItems
        } = await request.json();

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

        console.log(phone, userId , shippingCost);
        console.log(`this is the userid ${shippingCost}`)
        const userExists = await db.user.findUnique({
            where: { id: userId }
        });

        if (!userExists) {
            return NextResponse.json({
                message: 'User not found',
            }, { status: 404 });
        }

        const newOrder = await db.order.create({
            data: {
                fname,
                lname,
                email,
                phone,
                streetAddress,
                city,
                country,
                zipCode,
                shippingCost,
                paymentMethod,
                user: {
                    connect: { id: userId }
                }
            }
        });

        const newOrderItems = await db.orderItem.createMany({
            data: orderItems.map((item) => ({
                productId: item.id,
                quantity: parseInt(item.qty),
                price: parseFloat(item.salePrice),
                orderId: newOrder.id
            }))
        });

        console.log(newOrder, newOrderItems);
        return NextResponse.json(newOrder);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Failed to create order',
            error
        }, { status: 500 });
    }
}


export async function GET(request){
    try {
        const orders = await db.order.findMany({
            orderBy: {
                createdAt: 'desc'
            }
    })
        return NextResponse.json(orders)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch orders',
            error
        },{status:500}
        )
    }
}