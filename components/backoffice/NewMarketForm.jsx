"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewMarketForm({categories, updateData={}}) {
  const initialImageUrl = updateData?.imageUrl ?? ""
  const id = updateData?.id ?? ""
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true,
      ...updateData
    }
  })
  const isActive = watch('isActive')
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/markets")
  }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl=imageUrl
    console.log(data)
    if(id){
      makePutRequest(setLoading,`api/markets/${id}`, data, "Market", redirect)
     } else {
      makePostRequest(setLoading,'api/markets', data, "Market", reset, redirect)
      setImageUrl('')
     }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Market Title"
              name="title"
              register={register}
              errors={errors}
              className='w-full'
            />
            <SelectInput
              label='Select Categories'
              name='categoryId'
              register={register}
              errors = {errors}
              className='w-full'
              options={categories}
              multiple = {true}
            /> 
            {/* configure this endpoint in the core js */}
            <ImageInput label='Market Logo'
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint='marketLogoUploader'
            />
            <TextAreaInput label="Description"
              name="description"
              register={register}
              errors={errors}
            />
            <ToggleInput label="Market Status" 
              name='isActive' 
              trueTitle='Active' 
              falseTitle='In Active'
              register={register}
            />
          </div>
          <SubmitButton isLoading={loading} 
            buttonTitle={id?"Update Market": 'Create Market'} 
            loadingButtonTitle={`${id? "Updating":"Creating"} Market please wait...`}
          />
        </form>
  )
}
