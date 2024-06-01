"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo-dark.svg'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Building2, ChevronDown, ChevronRight, CircleDollarSign, Compass, Globe, HandPlatter, LayoutGrid, ListOrdered, LogOut, Settings, ShoppingBasket, Slack, SlidersHorizontal, Store, TicketCheck, UserRound, UserRoundCheck, Users2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

export default function Sidebar({showSideBar, setShowSideBar}) {
  const router = useRouter()
    async function handleLogout(){
        await signOut()
        router.push("/")
    }
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const {data:session, status} = useSession()
  if(status === "loading"){
    return <p>Loading....</p>
  }
  const role = session?.user?.role
  let sideBarLinks = [
    {
      title: 'Customers',
      icon: Users2,
      href: '/dashboard/customers',
    },
    {
      title: 'Markets',
      icon: Store,
      href: '/dashboard/markets',
    },
    {
      title: 'Farmers',
      icon: Compass,
      href: '/dashboard/farmers',
    },
    {
      title: 'Orders',
      icon: HandPlatter,
      href: '/dashboard/orders',
    }, 
    {
      title: 'Sales',
      icon: HandPlatter,
      href: '/dashboard/sales',
    },
    {
      title: 'Our Staff',
      icon: UserRound,
      href: '/dashboard/staff',
    },
    {
      title: 'Swift Community',
      icon: Building2,
      href: '/dashboard/community',
    },
    {
      title: 'Wallet',
      icon: CircleDollarSign,
      href: '/dashboard/wallet',
    },
    {
      title: 'Stettings',
      icon: Settings,
      href: '/dashboard/settings',
    },
    {
      title: 'Online Store',
      icon: Globe,
      href: '/',
    },
  ]
  let catalogueLinks = [
    {
      title: 'Products',
      icon: ShoppingBasket,
      href: '/dashboard/products',
    },
    {
      title: 'Categories',
      icon: ListOrdered,
      href: '/dashboard/categories',
    },
    {
      title: 'Coupons',
      icon: TicketCheck,
      href: '/dashboard/coupons',
    },
    {
      title: 'Store Banners',
      icon: SlidersHorizontal,
      href: '/dashboard/banners',
    },
  ]
  if(role === "Farmer"){
    sideBarLinks = [
      {
        title: 'Customers',
        icon: Users2,
        href: '/dashboard/customers',
      },
      {
        title: 'Markets',
        icon: Store,
        href: '/dashboard/markets',
      },
      {
        title: 'Orders',
        icon: HandPlatter,
        href: '/dashboard/orders',
      },
      {
        title: 'Sales',
        icon: HandPlatter,
        href: '/dashboard/sales',
      },
      {
        title: 'Swift Community',
        icon: Building2,
        href: '/dashboard/community',
      },
      {
        title: 'Wallet',
        icon: CircleDollarSign,
        href: '/dashboard/wallet',
      },
      {
        title: 'Stettings',
        icon: Settings,
        href: '/dashboard/settings',
      },
      {
        title: 'Online Store',
        icon: Globe,
        href: '/',
      },
    ] 
  } 
  if(role === "User") {
    sideBarLinks = [
      {
        title: 'My Orders',
        icon: HandPlatter,
        href: '/dashboard/orders',
      },
      {
        title: 'Profile',
        icon: UserRoundCheck,
        href: '/dashboard/profile',
      },
      {
        title: 'Online Store',
        icon: Globe,
        href: '/',
      },
    ]
    catalogueLinks = []
  }

  return (
    <div className={
        showSideBar 
        ? 'sm:block mt-20 sm:mt-0 bg-white dark:bg-slate-900 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md overflow-y-scroll' 
        : 'hidden sm:block mt-20 sm:mt-0 bg-white dark:bg-slate-900 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md overflow-y-scroll'
      }
    >
        <Link onClick={()=>setShowSideBar(false)} className="px-6 py-4" href="/dashboard">
          <Image src={logo} alt='swiftCartique' className='w-32 pl-2'/>
        </Link>
        <div className='space-y-3 flex flex-col mt-14'>
            <Link
            onClick={()=>setShowSideBar(false)} 
            href="/dashboard" 
            className={
              pathname === "/dashboard"
              ?"flex items-center space-x-3 px-4 py-2 border-l-8 border-lime-500 text-lime-500" 
              : 'flex items-center space-x-3 px-4 py-2'
            }
            >
              <LayoutGrid/> 
                <span>Dashboard</span>
            </Link>
            {
              catalogueLinks.length > 0 && (
                <Collapsible className='px-6 py-2'>
                  <CollapsibleTrigger className=''
                    onClick={()=> setOpenMenu(!openMenu)}
                  >
                    <button className='flex items-center space-x-4 py-2'>
                      <div className="flex items-center space-x-3">
                        <Slack/> 
                        <span>Catalogue</span>
                      </div>
                      {openMenu ? <ChevronDown/> : <ChevronRight/>}
                    </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='rounded-lg py-3 px-3 pl-8 dark:bg-slate-950 bg-slate-50 text-slate-600 shadow-sm'>
                        {
                          catalogueLinks.map((item, i)=>{
                            const Icon = item.icon
                            return(
                                  <Link key={i}
                                      onClick={()=>setShowSideBar(false)} 
                                      href={item.href} 
                                      className={
                                      pathname === item.href
                                      ?"flex items-center space-x-3 py-1 text-sm text-lime-500" 
                                      : 'flex items-center space-x-3 py-1'
                                    }
                                  >
                                    <Icon className='w-4 h-4'/> 
                                    <span>{item.title}</span>
                                  </Link>
                            )
                          })
                        }
                    </CollapsibleContent>
                </Collapsible>
              )
            }
            {
              sideBarLinks.map((item, i)=>{
                const Icon = item.icon
                return(
                  <Link 
                  onClick={()=>setShowSideBar(false)}
                  key={i} 
                  href={item.href} 
                  className={
                    item.href==pathname
                    ?"flex items-center space-x-3 px-4 py-2 border-l-8 border-lime-500 text-lime-500"
                    : 'flex items-center space-x-3 px-4 py-2'
                    }
                  >
                    <Icon/>
                    <span>{item.title}</span>
                  </Link> 
                )
              })
            }
          <div className="px-6 py-2">
            <button 
               onClick={handleLogout}
              className='bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3'
            >
              <LogOut/>
              <span>Logout</span>
            </button>
          </div>
        </div>
    </div>
  )
}
