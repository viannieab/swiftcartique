"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from 'next/link'

export default function MarketCarousel({markets}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
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
      itemClass="px-5"
    >
      {
        markets.map((market, i)=>{
          return(
            <Link key={i}
             href="#" className='rounded-lg'>
              <Image 
                src={market.logoUrl}
                alt={market.title}
                width={240} height={240} 
                className='w-full rounded-full'
                
              />
             <h2 className='text-center text-slate-900 dark:text-slate-200 mt-2'>{market.title}</h2>
            </Link>
          )
        })
      }
    </Carousel>
  )
}
