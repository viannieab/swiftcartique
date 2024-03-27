import React from 'react'

export default function DateColumn({row, accessorKey}) {
    const createdAt = row.getValue(`${accessorKey}`)
    const originalDate = new Date(createdAt)
    const day = originalDate.getDate()
    const month = originalDate.toLocaleDateString('default', {month: 'short'})
    const year = originalDate.getFullYear()
    const formatted = `${month} ${day} ${year}`
    return(
      <div className="">
        {formatted}
      </div>
    )
}
