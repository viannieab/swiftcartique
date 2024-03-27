import Breadcrumb from '@/components/frontend/Breadcrumb'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <div className="">
      <Breadcrumb/>
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-8">
            <h2 className='py-2 mb-6 text-2xl'>Your Cart</h2>
            <div className="flex items-center justify-between border-b border-slate-500 text-slate-400 pb-3 font-semibold text-sm mb-3">
              <h2 className="uppercase">Product</h2>
              <h2 className="uppercase">Quantity</h2>
              <h2 className="uppercase">Price</h2>
            </div>
            <div className="">
              <div className="flex items-center justify-between border-b border-slate-500 pb-3 font-semibold text-sm mb-4">
                <div className="flex items-center gap-3">
                  <Image src="/vegetables.webp" 
                    width={240} 
                    height={240} 
                    alt='tomatoes' 
                    className='rounded-xl w-16 h-16'/>
                  <div className="flex flex-col">
                      <h2>
                        Tomatoes
                      </h2>
                      <small>Fresh red and juicy tomatoes</small>
                  </div>
                </div>
                <div className="flex gap-3 items-center rounded-xl border border-gray-400">
                  <button className='border-r border-gray-400 py-2 px-4'>
                    <Minus/>
                  </button>
                  <p className='flex-grow py-2 px-4'>
                    1
                  </p>
                  <button className='border-l border-gray-400 py-2 px-4'>
                    <Plus/>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <h4>UGX 12000</h4>
                  <button>
                    <Trash2 className='text-red-600 w-5 h-5'/>
                  </button>
                </div>
              </div>
              {/* cart 2 */}
              <div className="flex items-center justify-between border-b border-slate-500 pb-3 font-semibold text-sm mb-4">
                <div className="flex items-center gap-3">
                  <Image src="/fresh-fruits.jpg" 
                    width={715} 
                    height={536} 
                    alt='berries' 
                    className='rounded-xl w-16 h-16'/>
                  <div className="flex flex-col">
                      <h2>
                        Strawberries
                      </h2>
                      <small>Fresh red berries</small>
                  </div>
                </div>
                <div className="flex gap-3 items-center rounded-xl border border-gray-400">
                  <button className='border-r border-gray-400 py-2 px-4'>
                    <Minus/>
                  </button>
                  <p className='flex-grow py-2 px-4'>
                    1
                  </p>
                  <button className='border-l border-gray-400 py-2 px-4'>
                    <Plus/>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <h4>UGX 32000</h4>
                  <button>
                    <Trash2 className='text-red-600 w-5 h-5'/>
                  </button>
                </div>
              </div>
              {/* cart 3 */}
              <div className="flex items-center justify-between border-b border-slate-500 pb-3 font-semibold text-sm mb-4">
                <div className="flex items-center gap-3">
                  <Image src="/fresh-fruits.webp" 
                    width={240} 
                    height={240} 
                    alt='apples' 
                    className='rounded-xl w-16 h-16'/>
                  <div className="flex flex-col">
                      <h2>
                        Apples
                      </h2>
                      <small>Fresh green apples</small>
                  </div>
                </div>
                <div className="flex gap-3 items-center rounded-xl border border-gray-400">
                  <button className='border-r border-gray-400 py-2 px-4'>
                    <Minus/>
                  </button>
                  <p className='flex-grow py-2 px-4'>
                    1
                  </p>
                  <button className='border-l border-gray-400 py-2 px-4'>
                    <Plus/>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <h4>UGX 45000</h4>
                  <button>
                    <Trash2 className='text-red-600 w-5 h-5'/>
                  </button>
                </div>
              </div>
              {/* coupon */}
              <div className="flex items-center gap-2 py-8">
                <input type="text" id="email" aria-describedby="helper-text-explanation" className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Enter Coupon"/>
                <button className='shrink-0 py-2.5 px-4 rounded-lg bg-lime-600'>
                  Apply Coupon
                </button>
              </div>
            </div>
        </div>
        <div className="col-span-4 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden p-5 dark:text-slate-100 font-bold">
          <h2 className="text-2xl pb-3">
            Cart Total
          </h2>
          <div className="flex items-center justify-between border-b border-gray-500 pb-6">
            <span>Subtotal</span>
            <span>UGX 89000</span>
          </div>
          <div className="flex items-center justify-between pb-4 mt-2">
            <span>Tax</span>
            <span>UGX 1500</span>
          </div>
          <div className="flex items-center justify-between pb-4">
            <span>Shipping</span>
            <span>UGX 5000</span>
          </div>
          <p className='border-b border-gray-500 pb-6 text-slate-400 font-normal'>We only charge for shipping when you have over 2kg items</p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Total</span>
            <span>UGX 95500</span>
          </div>
          <Link href="#" className='bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal'>Continue to Payment</Link>
        </div>
      </div>
    </div>
  )
}
