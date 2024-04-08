import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
    const session = await getServerSession(authOptions)
    if(!session) return
    const {user} = session
  return (
    <div>
        <h3>Welcome {user?.name}</h3>
    </div>
  )
}
