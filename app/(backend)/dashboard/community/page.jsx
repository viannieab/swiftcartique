import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import Heading from '@/components/backoffice/Heading'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* header */}
        <PageHeader heading='Swift Cartique Community Training' href='/dashboard/community/new' linkTitle='Add Training'/>
      {/* table actions */}
      {/* Export || search || Bulk delete */}
      <TableActions/>
      <div className="py-8">
        {/* <h2>Table</h2> */}
      </div>
    </div>
  )
}