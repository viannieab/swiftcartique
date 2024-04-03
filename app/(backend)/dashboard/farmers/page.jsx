import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Farmers() {
  const farmers = await getData("farmers")
  return (
    <div>
      {/* header */}
        <PageHeader heading='Farmers' href='/dashboard/farmers/new' linkTitle='Add Farmer'/>
        <div className="py-8">
          <DataTable columns={columns} data={farmers} filterKeys={["email"]}/>
        </div>
    </div>
  )
}
