import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function SmallCard({data}) {
    const { title, numbers, iconColor, icon:Icon} = data
  return (
    <div className='rounded-lg shadow bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-900'>
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconColor} rounded-full items-center flex justify-center`}>
                <Icon className='dark:text-slate-50 text-slate-50'/>
            </div>
            <div className=''>
                <p>{title}</p>
                <h3 className='text-1xl font-bold'>{numbers}</h3>
            </div>
        </div>
    </div>
  )
}
