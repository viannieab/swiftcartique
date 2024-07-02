import React from 'react'
import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart, Truck } from 'lucide-react';

export default function SmallCards() {
    const orderStatus = [{
        title: "Total Orders",
        numbers: 2760,
        iconColor: "bg-green-600",
        icon:ShoppingCart, 
    },
    {
        title: "Orders Pending",
        numbers: 560,
        iconColor: "bg-blue-600",
        icon:Loader2,
    },
    {
        title: "Order Processing",
        numbers: 800,
        iconColor: "bg-orange-600",
        icon:RefreshCcw,
    },
    {
        title: "Orders In Transit",
        numbers: 200,
        iconColor: "bg-yellow-600",
        icon:Truck,
    },
    {
        title: "Orders Delivered",
        numbers: 1200,
        iconColor: "bg-purple-600",
        icon:CheckCheck,
    },
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8'>
        {
            orderStatus.map((data, i)=>{
                return(
                    <div key={i} className="me-2">
                        <SmallCard data={data} />
                    </div>
                )
            })
        }
    </div>
  )
}
