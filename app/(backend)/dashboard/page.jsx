import DashboardCharts from '@/components/backoffice/DashboardCharts'
import FarmerDashboard from '@/components/backoffice/FarmerDashboard'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import UserDashboard from '@/components/backoffice/UserDashboard'
import DataTable from '@/components/data-table-components/DataTable'
import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import { columns } from './orders/columns'
import PageHeader from '@/components/backoffice/PageHeader'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  const role = session?.user?.role
  if(role === "User"){
    return <UserDashboard/>
  }
  if(role === "Farmer"){
    return <FarmerDashboard/>
  }
  const orders = await getData("orders")
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
        <div className="py-8">
        <Heading title="Recent Orders"/>
          <DataTable columns={columns} data={orders} filterKeys={["email"]}/>
        </div>        
    </div>
  )
}
