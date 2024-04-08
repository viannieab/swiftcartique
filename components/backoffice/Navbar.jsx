"use client"
import { AlignJustify, Bell, LayoutDashboard, LogOut, Sun, User, UserRoundCog, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import Link from 'next/link'
import UserAvator from './UserAvator'
import { useSession } from 'next-auth/react'

export default function Navbar({setShowSideBar, showSideBar}) {
  const {data: session, status} = useSession()
  if(status === "loading"){
    return <p>Loading...</p>
  }
  return (
    <div className='flex items-center justify-between bg-white dark:bg-slate-900 text-slate-50 h-15 py-4 fixed top-0 w-full px-8 z-50 sm:pr-[20rem]'>
        {/* icon */}
        <button onClick={()=>setShowSideBar(!showSideBar)} className='text-lime-700 dark:text-lime-500'><AlignJustify/></button>
        {/* 3 icons */}
        <div className="flex space-x-3">
            <ThemeSwitcherBtn/>
            <DropdownMenu>
                <DropdownMenuTrigger>
                  <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4">
                    <Bell className='text-lime-700 dark:text-lime-500'/>
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-5 dark:border-gray-900">20</div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='px-4 py-2 pr-8'>
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className='flex items-center space-x-2'>
                      <Image src='/profile.png' alt='User profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                      <div className="flex flex-col space-y-1">
                        <p>Yellow Sweet Corn in full stock</p>
                        <div className="flex items-center space-x-2">
                          <p className='px-3 py-0.5 bg-lime-800 text-white rounded-full text-sm'>Stock In</p>
                          <p className='px-3 py-0.5 bg-blue-700 text-white rounded-full text-sm'>Dec 12 2021 - 12:40PM</p>
                        </div>
                      </div>
                      <button> 
                        <X/>
                      </button>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className='flex items-center space-x-2'>
                      <Image src='/profile.png' alt='User profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                      <div className="flex flex-col space-y-1">
                        <p>Yellow Sweet Corn in limited stock</p>
                        <div className="flex items-center space-x-2">
                          <p className='px-3 py-0.5 bg-yellow-400 text-white rounded-full text-sm'>Limited Stock</p>
                          <p className='px-3 py-0.5 bg-blue-700 text-white rounded-full text-sm'>Jan 10 2022 - 12:40PM</p>
                        </div>
                      </div>
                      <button> 
                        <X/>
                      </button>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className='flex items-center space-x-2'>
                      <Image src='/profile.png' alt='User profile' width={200} height={200} className='w-8 h-8 rounded-full'/>
                      <div className="flex flex-col space-y-1">
                        <p>Yellow Sweet Corn out of stock</p>
                        <div className="flex items-center space-x-2">
                          <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock Out</p>
                          <p className='px-3 py-0.5 bg-blue-700 text-white rounded-full text-sm'>Dec 12 2021 - 12:40PM</p>
                        </div>
                      </div>
                      <button> 
                        <X/>
                      </button>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
              {
                status === "authenticated" &&
                <UserAvator user={session?.user}/>
              }
            </div>
    </div>
  )
}
