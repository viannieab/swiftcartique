import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import FarmerDashboard from '@/components/backoffice/FarmerDashboard'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import UserDashboard from '@/components/backoffice/UserDashboard'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  const role = session?.user?.role
  if(role === "User"){
    return <UserDashboard/>
  }
  if(role === "Farmer"){
    return <FarmerDashboard/>
  }
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
