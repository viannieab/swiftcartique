import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import Heading from '@/components/backoffice/Heading'
import React from 'react'

export default function Sliders() {
  return (
    <div>
      {/* header */}
        <PageHeader heading='Sliders' href='/dashboard/sliders/new' linkTitle='Add Slider'/>
      {/* table actions */}
      {/* Export || search || Bulk delete */}
      <TableActions/>
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}
