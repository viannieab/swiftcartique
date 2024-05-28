"use client"
import { setCurrentStep } from '@/redux/slices/checkoutSlice';
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'

export default function OrderSummary() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const currentStep = useSelector((store)=> store.checkout.currentStep)
  const checkoutFormData = useSelector((store)=>store.checkout.checkoutFormData)
  const cartItems = useSelector((store)=>store.cart)
  const dispatch = useDispatch()
  const subTotal = cartItems.reduce((acc, currentItem)=>{
   return acc + (currentItem.salePrice * currentItem.qty)
  },0).toFixed(2) ?? 0
  async function handlePrevious(){
    dispatch(setCurrentStep(currentStep - 1))
  }
  async function submitData(){
    const data = {
      orderItems:cartItems,
      checkoutFormData
    }
    console.log(data)
    try {
      setLoading(true)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      const response = await fetch(`${baseUrl}/api/orders`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      if(response.ok){
        setLoading(false)
        toast.success("Order Created Successfully")
        router.push("/order-confirmation")
      } else{
          setLoading(false)
          toast.error("Something went wrong, Please try again!")
        }
      }
     catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  return (
    <div className='my-6'>
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>Order Summary</h2>
      {
        cartItems.map((cartItem, i) => {
        return(
          <div key={i} className="flex items-center justify-between border-b border-slate-500 pb-3 font-semibold text-sm mb-4">
            <div className="flex items-center gap-3">
              <Image src={cartItem.imageUrl} 
                  width={240} 
                  height={240} 
                  alt={cartItem.title} 
                  className='rounded-xl w-14 h-14'
              />
              <div className="flex flex-col">
                <h2>{cartItem.title}</h2>
              </div>
            </div>
            <div className="flex gap-3 items-center rounded-xl border border-gray-400">
              <p className='flex-grow py-2 px-4'>
                {cartItem.qty}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h4>UGX {cartItem.salePrice} </h4>
            </div>
        </div>
        )
      })
    }
    <div className="mt-4 flex items-center justify-between">
      {currentStep > 1 && (
          <button
            onClick={handlePrevious}
            type="button"
            className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            <span>Previous</span>
          </button>
        )}
        {
          loading?(
            <button disabled className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700">
              Processing Please wait...
            </button>
          ):(
            <button
              onClick={submitData}
              className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
            >
              <span>Proceed to Payment</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )
        }
      </div>
    </div>
  )
}
