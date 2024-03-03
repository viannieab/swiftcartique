import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {
  const {period, sales, icon:Icon} = data;
  return (
    <div className={`rounded-lg text-white shadow p-8 flex items-center flex-col gap-2 ${data.color}`}>
        <Icon />
        <h4>{period}</h4>
        <h2 className='lg:text-2xl text-1xl'>UGX. {sales}</h2>
    </div>
  )
}
