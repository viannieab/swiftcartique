import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import { HelpCircle, ShoppingCart, UserRound } from 'lucide-react'
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import HelpModal from './HelpModal'
import CartCount from './CartCount'

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
          <CartCount/>
        </div>
        <ThemeSwitcherBtn/>
       </div>
    </div>
  )
}
