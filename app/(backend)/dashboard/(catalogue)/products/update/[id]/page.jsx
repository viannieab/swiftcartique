import Farmers from '@/app/(backend)/dashboard/farmers/page'
import FormHeader from '@/components/backoffice/FormHeader'
import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateProduct({params:{id}}) {
  const product = await getData(`products/${id}`)
  const userData = await getData("users")
  const categoriesData = await getData("categories")
  const farmerData = userData.filter((user)=> user.role == "Farmer")
  const farmers = farmerData.map((farmer)=>{
    return{
      id: farmerData.id,
      title: farmer.name
    }
  })
  const categories = categoriesData.map((category)=>{
    return{
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
        <FormHeader title="Update Product"/>
        <NewProductForm
          updateData = {product}
          categories={categories}
          farmers={farmers}
        />
    </div>
  )
}
