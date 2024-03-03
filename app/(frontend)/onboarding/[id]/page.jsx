import OnboardingFarmer from '@/components/backoffice/OnboardingFarmer'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page({params:{id}}) {
    const user = await getData(`users/${id}`)
    console.log(user)
  return (
    <div className="flex flex-col gap-6 p-10">
        <div className="max-w-4xl p-4 mx-auto">
        <h2>Hello {user?.name}, Tell Us More About Yourself</h2>
        </div>        
        <OnboardingFarmer user={user}/>
    </div>
  )
}
