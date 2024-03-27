import PageHeader from '@/components/backoffice/PageHeader'
import React from 'react'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Coupons() {
  const coupons = await getData("coupons")
  return (
    <div>
      {/* header */}
        <PageHeader heading='Coupons' href='/dashboard/coupons/new' linkTitle='Add Coupon'/>
        <div className="py-8">
          <DataTable columns={columns} data={coupons}/>
        </div>
    </div>
  )
}