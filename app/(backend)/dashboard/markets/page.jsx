import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Markets() {
  const markets = await getData("markets")
  return (
    <div>
      {/* header */}
        <PageHeader heading='Markets' href='/dashboard/markets/new' linkTitle='Add Market'/>
        <div className="py-8">
          <DataTable columns={columns} data={markets}/>
        </div>
    </div>
  )
}
