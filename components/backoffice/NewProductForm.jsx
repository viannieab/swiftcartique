"use client"
import ArrayItemsInput from '@/components/FormInputs/ArrayItemsInput'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewProductForm({categories, farmers}) {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const {register, watch, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      isActive:true,
      isWholeSale:false
    }
  })
  const isActive = watch('isActive')
  //tags
  const [tags, setTags] = useState([])
  const isWholeSale = watch('isWholeSale')
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/products")
  }
  async function onSubmit(data){
    const slug = generateSlug(data.title)
    const productCode = generateUserCode('SCP', data.title)
    data.slug = slug
    data.imageUrl=imageUrl
    data.tags = tags
    data.qty = 1
    data.productCode = productCode
    makePostRequest(setLoading,'api/products', data, "Product", reset, redirect)
    setImageUrl('')
    setTags([])
  }
  return (
    <div>
        <FormHeader title='New Product'/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Product Title"
            name="title"
            register={register}
            errors={errors}
            />
            <TextInput label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Product Price"
            name="productPrice"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Sale Price"
            name="salePrice"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput label="Price Stock"
            name="productStock"
            type='number'
            register={register}
            errors={errors}
            className='w-full'
            />                          
            <TextInput label="Unit of Measurement (eg. Kilograms)"
            name="unit"
            register={register}
            errors={errors}
            className='w-full'
            />
            <SelectInput 
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className='w-full'
            options={categories}
            />
            <SelectInput 
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className='w-full'
            options={farmers}
            />
            <ToggleInput label="Wholesale Product" 
            name='isWholeSale' 
            trueTitle='True' 
            falseTitle='False'
            register={register}
            />
            {
              isWholeSale && (
                 <>
                    <TextInput label="Wholesale Price"
                      name="wholesalePrice"
                      type='number'
                      register={register}
                      errors={errors}
                      className='w-full'
                    />
                    <TextInput label="Minimum Wholesale Qty"
                      name="wholesaleQty"
                      type='number'
                      register={register}
                      errors={errors}
                      className='w-full'
                    />
                 </>
              )
            }
            <ImageInput label='Product Image'
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='productImageUploader'
            />
           {/* tags */}
            <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag"/>
            <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
            />
            {/* isActive */}
            <ToggleInput label="Publish Product" 
            name='isActive' 
            trueTitle='Active' 
            falseTitle='In Active'
            register={register}
            />
          </div>
          <SubmitButton isLoading={loading} buttonTitle='Add Product' loadingButtonTitle='Adding product please wait...'/>
        </form>        
    </div>
  )
}
