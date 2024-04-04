import FormHeader from '@/components/backoffice/FormHeader'
import NewMarketForm from '@/components/backoffice/NewMarketForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewMarket() {
  //categories
  const categoriesData = await getData('categories')
  const categories = categoriesData?.map((category)=>{
    return{
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
      <FormHeader title='New Market' />
      <NewMarketForm categories={categories}/>
    </div>
  )
}
