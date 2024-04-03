"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal'
import { generateCouponCode } from '@/lib/generateCouponCode'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CouponForm({updateData={}}) {
  const expiryDateNormal = convertIsoDateToNormal(updateData.expiryDate)  
  const id = updateData?.id ?? ""
  updateData.expiryDate = expiryDateNormal
  const [loading, setLoading] = useState(false) 
  const [couponCode, setCouponCode] = useState()
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true,
      ...updateData
    }
  })
  const isActive = watch('isActive')
  const router = useRouter()
  function redirect(){
    router.push('/dashboard/coupons')
  }
  async function onSubmit(data){
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    data.couponCode = couponCode
    if(id){
        makePutRequest(setLoading,`api/coupons/${id}`, data, "Coupon", redirect)
       } else {
        makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Coupon Title"
                name="title"
                register={register}
                errors={errors}
                className='w-full'
            />
            <TextInput label="Coupon Expiry Date"
                name="expiryDate"
                type='date'
                register={register}
                errors={errors}
                className='w-full'
            />
            <ToggleInput label="Publish Coupon" 
                name='isActive' 
                trueTitle='Active' 
                falseTitle='Inactive'
                register={register}
            />
        </div>
          <SubmitButton isLoading={loading} 
            buttonTitle={id?"Update Coupon": 'Create Coupon'} 
            loadingButtonTitle={`${id? "Updating":"Creating"} Coupon please wait...`}
          />
    </form>
  )
}
