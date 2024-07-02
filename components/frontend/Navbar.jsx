"use client"
import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import { HelpCircle, ShoppingCart, UserRound } from 'lucide-react'
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import HelpModal from './HelpModal'
import CartCount from './CartCount'
import { useSession } from 'next-auth/react'
import UserAvator from '../backoffice/UserAvator'

export default function Navbar() {
  const {data:session, status} = useSession()
  if(status === "loading"){
    return <p>Loading...</p>
  }
  return (
    <div className="bg-white dark:bg-slate-800">
       <div className="flex items-center justify-between py-3 max-w-6xl mx-auto px-4 sm:px-8 gap-4 sm:gap-8">
        {/* Logo */}
        <Link className="" href="/">
          <Image src={logo} alt="SwiftCartique logo" className="w-24 sm:w-24" />
        </Link>
        {/* SEARCH */}
        <div className="flex-grow hidden sm:block">
          <SearchForm />
        </div>
        <div className="flex items-center gap-4">
          {
            status === "unauthenticated" ? (
              <Link href='/login' className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
                <UserRound/>
                <span>Login</span>
              </Link>
            ):(
              <UserAvator user={session?.user}/>
            )
          }
          <HelpModal/>
          <CartCount/>
        </div>
        <ThemeSwitcherBtn className="hidden sm:block"/>
       </div>
       {/* mobile search */}
       <div className="block sm:hidden px-4 py-2">
        <SearchForm/>
       </div>
    </div>
  )
}
