"use client"
import TextInput from '@/components/FormInputs/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import NavButtons from '../NavButtons'
import { Circle, CreditCard, HandCoins, Truck } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice'

export default function PaymentMethodForm() {
  const currentStep = useSelector((store)=>store.checkout.currentStep)
  const existingFormData = useSelector((store)=>store.checkout.checkoutFormData)
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      ...existingFormData
    }
  }) 
  const initialPayment = existingFormData.paymentMethod || ""
  const [paymentMethod, setPaymentMethod] = useState(initialPayment)
  const dispatch = useDispatch()
  async function processData(data){
    data.paymentMethod = paymentMethod
     //update the checkout data
     dispatch(updateCheckoutFormData(data))
     //update the current step
     dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>Payment Methods</h2>
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="col-span-full">
              <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Which payment method do you prefer?</h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                    <input 
                      // {...register("paymentMethod", {required:true})}
                      type="radio" 
                      id="hosting-small" 
                      name="hosting" 
                      value="Cash on Delivery" 
                      className="hidden peer" 
                      required 
                      onChange={(e)=>setPaymentMethod(e.target.value)}
                    />
                    <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                        <div className="flex gap-2 items-center">
                          <HandCoins className='w-8 h-8 ms-3 flex-shrink-0'/>
                          <div className="">
                            <p>Cash on Delivery</p>
                          </div>
                        </div>
                        <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
                    </label>
                </li>
                <li>
                    <input 
                      // {...register("paymentMethod", {required:true})}
                      type="radio" 
                      id="hosting-big" 
                      name="hosting" 
                      value="Credit Card" 
                      className="hidden peer"
                      onChange={(e)=>setPaymentMethod(e.target.value)}
                    />
                    <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex gap-2 items-center">
                          <CreditCard className='w-8 h-8 ms-3 flex-shrink-0'/>
                          <div className="">
                            <p>Credit Card</p>
                          </div>
                        </div>
                        <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
                    </label>
                </li>
              </ul>
            </div>            
        </div>
        <NavButtons/>
    </form>
  )
}

