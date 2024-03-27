import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Banners() {
  const banners = await getData("banners")
  return (
    <div>
      {/* header */}
        <PageHeader heading='Banners' href='/dashboard/banners/new' linkTitle='Add Banner'/>
        <div className="py-8">
          <DataTable columns={columns} data={banners}/>
        </div>
    </div>
  )
}