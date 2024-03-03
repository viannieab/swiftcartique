import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import Heading from '@/components/backoffice/Heading'
import React from 'react'

export default function Coupons() {
  return (
    <div>
      {/* header */}
        <PageHeader heading='Coupons' href='/dashboard/coupons/new' linkTitle='Add Coupon'/>
      {/* table actions */}
      {/* Export || search || Bulk delete */}
      <TableActions/>
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  )
}
