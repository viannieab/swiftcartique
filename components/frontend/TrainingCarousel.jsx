"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from 'next/link'

export default function TrainingCarousel({trainings}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-4"
    >
      {
        trainings.map((training, i)=>{
          return(
            <div key={i}
              className='rounded-lg mr-3 bg-slate-100 dark:bg-slate-900 overflow-hidden'>
             <Link href='#'>
              <Image 
                  src={training.imageUrl}
                  alt={training.title} 
                  width={240} height={240} 
                  className='w-full h-48 object-cover'
                  
                />
             </Link>
             <h2 className='text-center text-slate-900 dark:text-slate-200 my-2 text-xl font-semibold'>{training.title}</h2>
             <p className='px-4 line-clamp-3 text-slate-800 dark:text-slate-300 mb-2'>{training.description}</p>
             <div className="flex justify-between items-center px-4 py-2">
             <Link href='#'
                className='bg-lime-600 hover:bg-lime-700 duration-300 transition-all text-slate-50 rounded-md px-2 py-2'
              >
                Read more
              </Link>
              <Link href='#' className='text-slate-800 dark:text-slate-300'>Talk to the consultant</Link>
             </div>
            </div>
          )
        })
      }
    </Carousel>
  )
}
