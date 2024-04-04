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
import "react-quill/dist/quill.snow.css"
import dynamic from 'next/dynamic'

// Import Quill dynamically with ssr: false
const QuillEditor = dynamic(() => import("@/components/FormInputs/QuillEditor"), {
  ssr: false
});

export default function NewTrainingForm({ categories, updateData = {} }) {
  const initialContent = updateData?.content ?? ""
  const initialImageUrl = updateData?.imageUrl ?? ""
  const id = updateData?.id ?? ""
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData
    }
  });
  const isActive = watch('isActive');
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/community");
  }

  // Quill editor
  const [content, setContent] = useState(initialContent);

  // Quill editor end
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    if(id){
      makePutRequest(setLoading,`api/trainings/${id}`, data, "Training", redirect)
     } else {
      makePostRequest(setLoading, 'api/trainings', data, "Training", reset, redirect)
      setImageUrl('')
      setContent('')
     }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
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
          <TextAreaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label='Training Thumbnail'
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='trainingThumbnailUploader'
          />
          {/* content */}
          <QuillEditor label='Training Content' value={content} onChange={setContent} />
          <ToggleInput
            label="Publish Training"
            name='isActive'
            trueTitle='Active'
            falseTitle='In Active'
            register={register}
          />
        </div>
        <SubmitButton isLoading={loading} 
          buttonTitle={id?"Update Training": 'Create Training'}
          loadingButtonTitle={`${id? "Updating":"Creating"} Training please wait...`}
        />
      </form>
  )
}
