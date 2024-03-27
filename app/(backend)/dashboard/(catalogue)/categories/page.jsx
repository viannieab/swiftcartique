import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Categories() {
  const categories = await getData("categories")
  return (
    <div>
      {/* header */}
      <PageHeader heading='Categories' href='/dashboard/categories/new' linkTitle='Add Category'/>
        <div className="py-8">
          <DataTable columns={columns} data={categories}/>
        </div>
    </div>
  )
}