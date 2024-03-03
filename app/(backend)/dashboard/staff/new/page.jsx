"use client"
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewStaff() {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:false
    }
  })
  const isActive = watch('isActive')
  async function onSubmit(data){
    const code = generateUserCode('SCF-STF', data.name)
    data.code = code
    makePostRequest(setLoading,'api/staffs', data, "Staff", reset)
  }
  return (
    <div>
        <FormHeader title='New Staff'/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Fullname"
            name="name"
            register={register}
            errors={errors}
            />
            <TextInput label="NIN (Id Number)"
            name="nin"
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Date of Birth"
            name="dob"
            type='date'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Password"
            name="password"
            type='password'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Email Address"
            name="email"
            type='email'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Phone Number"
            name="number"
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className='w-full'
            />
          <TextAreaInput label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          {/* <ToggleInput label="Farmer Status" 
            name='isActive' 
            trueTitle='Active' 
            falseTitle='In Active'
            register={register}
          /> */}
          </div>
          <SubmitButton isLoading={loading} buttonTitle='Add Staff' loadingButtonTitle='Adding staff please wait...'/>
        </form>        
    </div>
  )
}
