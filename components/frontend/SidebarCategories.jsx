import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategories() {
    const categories = await getData('categories')
  return (
    <div className="sm:col-span-3 md: sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
    <h2 className='bg-slate-100 dark:bg-gray-800 py-2 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100'>
        Shop by Category ({categories.length})
    </h2>
    <div className="py-2 px-6 h-[300px] overflow-y-auto flex flex-col gap-2">
        {
            categories.map((category, i)=>{
                return(
                    <Link key={i}
                        href='#' 
                        className='flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-200 dark:hover:bg-slate-600 rounded-md'
                    >
                    <Image width={240} height={240} 
                        className='w-10 h-10 rounded-full object-cover border border-lime-400' 
                        src={category.imageUrl} 
                        alt={category.title}
                    />
                    <span className='text-sm'>{category.title}</span>
                   </Link>
                )
            })
        }
    </div>
</div>
  )
}
