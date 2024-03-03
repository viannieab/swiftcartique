import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import Heading from '@/components/backoffice/Heading'
import React from 'react'

export default function Farmers() {
  return (
    <div>
      {/* header */}
        <PageHeader heading='Farmers' href='/dashboard/farmers/new' linkTitle='Add Farmer'/>
      {/* table actions */}
      {/* Export || search || Bulk delete */}
      <TableActions/>
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}
