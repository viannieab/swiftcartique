"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ArrayItemsInput from '../FormInputs/ArrayItemsInput'

export default function OnboardingFarmer({user}) {
  const [profileImageUrl, setProfileImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true,
      ...user
    }
  })
  const isActive = watch('isActive')
  const router = useRouter()
  function redirect(){
    router.push('/dashboard/farmers')
  }
  async function onSubmit(data){
    const code = generateUserCode('SCF-FARM', data.name)
    data.code = code
    data.userId = user.id
    data.products = products
    data.profileImageUrl = profileImageUrl
    makePostRequest(setLoading,'api/farmers', data, "Farmer Profile", reset, redirect)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <TextInput label="Farmer's Name"
      name="name"
      register={register}
      errors={errors}
      className='w-full'
      />
      <TextInput label="Farmer's Phone"
      name="phone"
      type='tel'
      register={register}
      errors={errors}
      className='w-full'
      />
      <TextInput label="Farmer's Email Address"
      name="email"
      type='email'
      register={register}
      errors={errors}
      className='w-full'
      />
      <TextInput label="Farmer's Physical Address"
      name="physicalAddress"
      register={register}
      errors={errors}
      className='w-full'
      />
    <TextInput label="Farmer's Contact Person"
      name="contactPerson"
      register={register}
      errors={errors}
      className='w-full'
    />
    <TextInput label="Farmer's Contact Person Phone"
      name="contactPersonPhone"
      type='tel'
      register={register}
      errors={errors}
      className='w-full'
    />
    {/* Acres  */}
    <TextInput label="What's your land size (Acres)"
      name="landSize"
      type='number'
      register={register}
      errors={errors}
      className='w-full'
    />
    <TextInput label="What's your main crop cultivated"
      name="mainCrop"
      type='text'
      register={register}
      errors={errors}
      className='w-full'
    />
    <ArrayItemsInput setItems={setProducts} items={products} itemTitle='Product'/>
    {/* configure this endpoint in the core js */}
    <ImageInput label='Farmer Profile Picture'
          imageUrl={profileImageUrl}
          setImageUrl={setProfileImageUrl}
          endpoint='famerProfileUploader'
    />
    <TextAreaInput label="Farmer's Payment Terms"
      name="terms"
      register={register}
      errors={errors}
      isRequired={false}
    />
    <TextAreaInput label="Notes"
      name="notes"
      register={register}
      errors={errors}
      isRequired={false}
    />
    <ToggleInput label="Farmer Status" 
      name='isActive' 
      trueTitle='Active' 
      falseTitle='In Active'
      register={register}
    />
    </div>
    <SubmitButton isLoading={loading} buttonTitle='Add Farmer' loadingButtonTitle='Adding farmer please wait...'/>
  </form> 
  )
}
