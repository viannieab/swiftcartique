"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true
    }
  })
  const isActive = watch('isActive')
  const router = useRouter()
  function redirect(){
    router.push('/dashboard/categories')
  }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl=imageUrl
    makePostRequest(setLoading,'api/categories', data, "Category", reset, redirect)
    setImageUrl('')
  }
  return (
    <div>
        <FormHeader title='New Category'/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Category Title"
            name="title"
            register={register}
            errors={errors}
            />           
          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput label='Category Image'
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint='categoryImageUploader'
          />
          <ToggleInput label="Publish Category" 
            name='isActive' 
            trueTitle='Active' 
            falseTitle='In Active'
            register={register}
          />
          </div>
          <SubmitButton isLoading={loading} buttonTitle='Create Category' loadingButtonTitle='Creating category please wait...'/>
        </form>        
    </div>
  )
}
