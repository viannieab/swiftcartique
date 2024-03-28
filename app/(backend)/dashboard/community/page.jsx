import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import Heading from '@/components/backoffice/Heading'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function page() {
  const trainings = await getData("trainings")
  return (
    <div>
      {/* header */}
        <PageHeader heading='Swift Cartique Community Training' href='/dashboard/community/new' linkTitle='Add Training'/>
        <div className="py-8">
          <DataTable columns={columns} data={trainings}/>
        </div>
    </div>
  )
}