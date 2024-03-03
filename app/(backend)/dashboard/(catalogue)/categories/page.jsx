import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import Heading from '@/components/backoffice/Heading'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* header */}
        <PageHeader heading='Categories' href='/dashboard/categories/new' linkTitle='Add Category'/>
      {/* table actions */}
      {/* Export || search || Bulk delete */}
      <TableActions/>
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}