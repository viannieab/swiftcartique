"use client"
import TextInput from '@/components/FormInputs/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import NavButtons from '../NavButtons'
import { Circle, Truck } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice'

export default function ShippingDetails() {
  const currentStep = useSelector((store)=>store.checkout.currentStep)
  const existingFormData = useSelector((store)=>store.checkout.checkoutFormData)
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      ...existingFormData
    }
  }) 
  const initialShippingCost = existingFormData.shippingCost || ""
  const [shippingCost, setShippingCost] = useState(initialShippingCost)
  const dispatch = useDispatch()
  async function processData(data){
    data.shippingCost = shippingCost
    //update the checkout data
    dispatch(updateCheckoutFormData(data))
    //update the current step
    dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>Shipping Details</h2>
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Street Address"
                name="streetAddress"
                register={register}
                errors={errors}
                className='w-full'
            />
            <TextInput label="City"
                name="city"
                register={register}
                errors={errors}
                className='w-full'
            />
            <TextInput label="County"
                name="country"
                register={register}
                errors={errors}
                className='w-full'
            />
            <TextInput label="Zip Code"
                name="zipCode"
                register={register}
                errors={errors}
                className='w-full'
            />
            {/* shipping */}
            <div className="col-span-full">
              <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost?</h3>
              <ul class="grid w-full gap-6 md:grid-cols-2">
                <li>
                    <input 
                      // {...register("shippingCost", {required:true})}
                      type="radio" 
                      id="hosting-small" 
                      name="hosting" 
                      value="$10" 
                      class="hidden peer" 
                      required 
                      onChange={(e)=>setShippingCost(e.target.value)}
                    />
                    <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                        <div className="flex gap-2 items-center">
                          <Truck className='w-8 h-8 ms-3 flex-shrink-0'/>
                          <div className="">
                            <p>UPS</p>
                            <p>Delivery Cost: $10</p>
                          </div>
                        </div>
                        <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
                    </label>
                </li>
                <li>
                    <input 
                      // {...register("shippingCost", {required:true})}
                      type="radio" 
                      id="hosting-big" 
                      name="hosting" 
                      value="$20" 
                      class="hidden peer"
                      onChange={(e)=>setShippingCost(e.target.value)}
                    />
                    <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex gap-2 items-center">
                          <Truck className='w-8 h-8 ms-3 flex-shrink-0'/>
                          <div className="">
                            <p>UPS</p>
                            <p>Delivery Cost: $20</p>
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
