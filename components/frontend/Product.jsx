"use client"
import { addToCart } from '@/redux/slices/cartSlice'
import { BaggageClaim } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function Product({product}) {
    const dispatch = useDispatch()
    function handleAddToCart(){
        dispatch(addToCart(product))
        toast.success("Item added successfully")
    }
  return (
    <div
        href="#" className='rounded-lg bg-white dark:bg-slate-900 shadow overflow-hidden'>
            <Link href={`/products/${product.slug}`}>
                <Image 
                  src={product.imageUrl}
                  alt={product.title} 
                  width={240} height={240} 
                  className='w-full h-48 object-cover'
                />              
              </Link>
              <div className="px-4">
                <Link href={`/products/${product.slug}`}>
                <h2 className='text-center text-slate-900 dark:text-slate-200 mt-2 font-semibold'>{product.title}</h2>
                </Link>
                <div className="flex items-center justify-between gap-2 pb-3 my-2 dark:text-slate-200">
                  <p>UGX {product.salePrice}</p>
                    <button onClick={()=>handleAddToCart()} className='flex items-center space-x-2 bg-lime-600 hover:bg-lime-700 py-2 px-4 rounded-md text-white'>
                      <BaggageClaim/>
                      <span>Add</span>
                    </button>
                </div>
              </div>
    </div>
  )
}
