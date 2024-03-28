import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Products() {
  const products = await getData("products")
  return (
    <div>
      {/* header */}
        <PageHeader heading='Products' href='/dashboard/products/new' linkTitle='Add Product'/>
        <div className="py-8">
          <DataTable columns={columns} data={products}/>
        </div>
    </div>
  )
}