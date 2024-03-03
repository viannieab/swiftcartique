import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import { HelpCircle, ShoppingCart, UserRound } from 'lucide-react'
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import HelpModal from './HelpModal'

export default function Navbar() {
  return (
    <div className="bg-white dark:bg-slate-800">
       <div className="flex items-center justify-between py-3 max-w-6xl mx-auto px-8 gap-8">
        {/* Logo */}
        <Link className="" href="/">
          <Image src={logo} alt="SwiftCartique logo" className="w-24" />
        </Link>
        {/* SEARCH */}
        <div className="flex-grow">
          <SearchForm />
        </div>
        <div className="flex gap-4">
          <Link href='/login' className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
                <UserRound/>
                <span>Login</span>
          </Link>
          <HelpModal/>
          <Link href='/cart'
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
              >
                <ShoppingCart className="text-lime-700 dark:text-lime-500" />
                <span className="sr-only">Cart</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
                  20
                </div>
          </Link>
        </div>
        <ThemeSwitcherBtn/>
       </div>
    </div>
  )
}
