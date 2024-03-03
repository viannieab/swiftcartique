"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Carousel from "nuka-carousel"

export default function HeroCarousel({banners}) {
    const config =  {
        nextButtonClassName: 'rounded-full',
        nextButtonText: <ChevronRight/>,
        pagingDotsClassName: 'me-2',
        prevButtonClassName: 'rounded-full',
        prevButtonText: <ChevronLeft/> 
       }
  return (
    <Carousel 
        autoplay 
        defaultControlsConfig={config}
        wrapAround 
        className="rounded-md overflow-hidden"
    >
      {
        banners.map((banner, i)=>{
          return(
            <Link key={i} href={banner.link} className="">
              <Image width={712} height={384} className="w-full" src={banner.imageUrl} alt={banner.title}/>
            </Link>
          )
        })
      }
    </Carousel>
  )
}