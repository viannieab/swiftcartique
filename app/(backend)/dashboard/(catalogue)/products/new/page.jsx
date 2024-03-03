import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewProduct() {
  //categories and farmers
  const categoriesData = await getData('categories')
  const categories = categoriesData.map((category)=>{
    return{
      id: category.id,
      title: category.title
    }
  })
 //farmers
  const userData = await getData('users')
  const farmersData = userData.filter((user)=>user.role==="Farmer")
  const farmers = farmersData.map((farmer)=>{
    return{
      id: farmer.id,
      title: farmer.name
    }
  })
  return (
    <NewProductForm categories={categories} farmers={farmers}/>
  )
}
