import React from 'react'
import MarketCarousel from './MarketCarousel'
import { getData } from '@/lib/getData'

export default async function MarketList() {
  const markets = await getData('markets')
  return (
    <div className='text-white py-8'>
        {/* market slider */}
        <div className="bg-white shadow-md dark:bg-slate-900 rounded-lg p-4">
          <h2 className='py-2 text-center text-2xl text-slate-900 dark:text-slate-50 mb-4'>Shop by Market</h2>
          <MarketCarousel markets={markets}/>
        </div>
    </div>
  )
}
