import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const {name, password, nin, dob, code, email, number, physicalAddress, isActive, notes} = await request.json()
        const newStaff = {name, password, nin, dob, code, email, number, physicalAddress, isActive, notes}
        console.log(newStaff)
        return NextResponse.json(newStaff)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            error: 'Failed to save staff',
        },{status:500}
        )
    }
}