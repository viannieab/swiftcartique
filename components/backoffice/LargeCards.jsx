import React from 'react'
import LargeCard from './LargeCard'
import { CalendarCheck, CalendarCheck2, CalendarClock, CalendarDays, CalendarOff, Layers } from 'lucide-react';

export default function LargeCards() {
    const orderStats = [{
        period: "Today Orders",
        sales: 110000,
        color: "bg-green-600",
        icon: Layers,
    },
    {
        period: "Yestarday Orders",
        sales: 130000,
        color: "bg-blue-600",
        icon: CalendarCheck,
    },
    {
        period: "This Month",
        sales: 300000,
        color: "bg-orange-600",
        icon: CalendarDays,
    },
    {
        period: "Last Month",
        sales: 860000,
        color: "bg-yellow-600",
        icon: CalendarOff,
    },
    {
        period: "All-Time Sales",
        sales: 5000000,
        color: "bg-purple-600",
        icon: CalendarClock,
    },
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8 justify-center items-center'>
        {
            orderStats.map((item, i)=>{
                return(
                    <LargeCard className="bg-green-600" data={item} key={i}/>
                )
            })
        }
    </div>
  )
}
