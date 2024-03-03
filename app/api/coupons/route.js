import db from "@/lib/db"
import { data } from "autoprefixer"
import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const {title, couponCode, expiryDate, isActive} = await request.json()
        const dateObject = new Date(expiryDate)
        const isoFormattedDate = dateObject.toISOString()
        const newCoupon = await db.coupon.create({
            data: {
                title,
                couponCode,
                expiryDate: isoFormattedDate,
                isActive
            }            
        })
        //console.log(data)
        console.log(newCoupon)
        return NextResponse.json(newCoupon)
    } catch(error){
        // console.log(error)
        return NextResponse.json({
            message: 'Failed to create coupon',
            error
        },{status:500}
        )
    }
}
export async function GET(request){
    try {
        const coupons = await db.coupon.findMany({
            orderBy: {
                createdAt: 'desc'
            }
    })
        return NextResponse.json(coupons)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch coupon',
            error
        },{status:500}
        )
    }
}