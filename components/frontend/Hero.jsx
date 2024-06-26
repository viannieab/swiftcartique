import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import { CircleDollarSign, FolderSync, HelpCircle } from 'lucide-react'
import advert from '../../public/banners/advert.gif'
import SidebarCategories from './SidebarCategories'
import { getData } from '@/lib/getData'

export default async function Hero() {
    const banners = await getData('banners')
 return (
    <div className='flex gap-5 mb-2 w-full lg:h-[65vh] '>
       <div className='w-[20%] lg:block hidden h-full'>
       <SidebarCategories/>
       </div>
        <div className="lg:w-[60%] rounded-md w-full h-full ">
            <HeroCarousel banners={banners}/>
        </div>
        <div className=" w-[20%] lg:block hidden bg-white shadow dark:bg-slate-800 rounded-lg p-3 h-full">
            <Link href='#' className="flex items-center space-x-1 mb-3">
                <HelpCircle className='shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900'/>
                <div className="flex flex-col">
                    <h2 className='uppercase text-sm'>Help Center</h2>
                    <p className='text-[0.6rem]'>Guide to Customer Care</p>
                </div>
            </Link>
            <Link href='#' className="flex items-center space-x-1 mb-3">
                <FolderSync className='shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900'/>
                <div className="flex flex-col">
                    <h2 className='uppercase text-sm'>Easy Return</h2>
                    <p className='text-[0.6rem]'>Quick Returm</p>
                </div>
            </Link>
            <Link href='/register-farmer' className="flex items-center space-x-1 mb-8">
                <CircleDollarSign className='shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900'/>
                <div className="flex flex-col">
                    <h2 className='uppercase text-sm'>Sell on SwiftCart</h2>
                    <p className='text-[0.6rem]'>Million of visitors</p>
                </div>
            </Link>
            <div>
            <Image src={advert} alt='advert' className='w-full h-full rounded-lg object-contain'/>
            </div>
        </div>
    </div>
  )
}
