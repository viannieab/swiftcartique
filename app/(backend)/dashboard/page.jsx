import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <Heading title="Dashboard Overview"/>
        {/* large cards */}
        <LargeCards/>
        {/* small cards */}
        <SmallCards/>
        {/* charts */}
        <DashboardCharts/>
        {/* recent orders */}
        <CustomDataTable/>
    </div>
  )
}
