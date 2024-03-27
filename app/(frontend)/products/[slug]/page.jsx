import Breadcrumb from '@/components/frontend/Breadcrumb'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'
import { getData } from '@/lib/getData'
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ProductDetailPage({params:{slug}}) {
    const category = await getData("/categories/65e36265855b322c4b4bcbf1")
  return (
    <div>
        <Breadcrumb/>
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
                <Image src="/vegetables.webp" alt='vegetables' width={240} height={240} className='w-full'/>
            </div>
            <div className="col-span-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className='text-xl lg:text-3xl font-semibold'>Basil</h2>
                    <button>
                        <Share2/>
                    </button>
                </div>
                <div className="border-b border-gray-500">
                    <p className='py-2'>
                        To keep basil fresh, trim the stems and place them in a glass or jar of water.To keep basil fresh, trim the stems and place them in a glass or jar of water.
                    </p>
                    <div className="flex items-center gap-8 mb-4">
                        <p>SKU: 32453453</p>
                        <p className='bg-lime-100 py-1.5 px-4 rounded-3xl text-slate-900'>
                            <b>Stock:</b> 230
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
                    <div className="flex items-center gap-4">
                        <h4 className='text-2xl'>UGX 5000</h4>
                        <del className='text-slate-400 text-sm'>UGX 8000</del>
                    </div>
                    <p className='flex items-center'>
                        <Tag className='w-5 h-5 text-slate-400 me-2'/>
                        <span>Save 50% right now!</span>
                    </p>
                </div>
                <div className="flex justify-between items-center py-6">
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
                    <button className='flex items-center space-x-2 bg-lime-600 hover:bg-lime-700 py-2 px-4 rounded-md text-white'>
                            <BaggageClaim/>
                            <span>Add to Cart</span>
                    </button>
                </div>
            </div>
            <div className="col-span-3 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
                <h2 className='bg-slate-100 dark:bg-gray-800 py-2 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100'>
                    Delivery & Returns
                </h2>
                <div className="p-4">
                    <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
                        <span>
                            SwiftCart Express
                        </span>
                        <Send/>
                    </div>
                    <div className='py-3 text-slate-100 border-b border-gray-500'>
                        Eligible for Free Delivery.
                        <Link href='#'>
                            View Details
                        </Link>
                    </div>
                    <h2 className='text-slate-200 py-2'>Choose your location</h2>
                    <div className="pb-3">
                        <select id="countries" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
                            <option value="CC" selected>Choose Country</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="GE">Germany</option>
                            <option value="UG">Uganda</option>
                            <option value="US">United States</option>
                        </select>
                    </div>
                    <div className="pb-3">
                        <select id="countries" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
                            <option value="CR" selected>Choose Region</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="GE">Germany</option>
                            <option value="UG">Uganda</option>
                            <option value="US">United States</option>
                        </select>
                    </div>
                    <div className="pb-3">
                        <select id="countries" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500">
                            <option value="CD" selected>Choose City</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="GE">Germany</option>
                            <option value="UG">Uganda</option>
                            <option value="US">United States</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>     
        <div className="bg-white dark:bg-slate-700 my-8 rounded-xl px-4 py-6">
            <h2 className='mb-4 text-xl font-semibold text-slate-200 ml-3'>Related Products</h2>
            <CategoryCarousel products={category.products}/>
        </div>
    </div>
  )
}
