import Image from 'next/image'
import React from 'react'

export default function ImageColumn({row, accessorKey}) {
    const imageUrl = row.getValue(`${accessorKey}`)
      return (
        <div className="shrink-0">
          <Image src={imageUrl} 
            alt="image" 
            width={240} 
            height={240} 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
    )
}
