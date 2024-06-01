"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { generateInitials } from "@/lib/generateInitials"
  import { LayoutDashboard, LogOut, UserRoundCog, } from 'lucide-react'
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function UserAvator({user={}}) {
  const {name, image} = user
  const initials = generateInitials(name)
  const role = user?.role
  const router = useRouter()
    async function handleLogout(){
        await signOut()
        router.push("/")
    }
  return (
    <DropdownMenu>
                <DropdownMenuTrigger>
                  <button>
                   {
                    image? <Image 
                    src='/profile.png' 
                    alt='User profile' 
                    width={200} 
                    height={200} 
                    className='w-8 h-8 rounded-full'
                /> : (
                      <div className="w-10 h-10 p-4 flex items-center justify-center rounded-full bg-slate-200 text-slate-900 dark:text-slate-50 dark:bg-slate-950 shadow-md">
                        {initials}
                      </div> 
                     )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='px-4 py-2 pr-8'>
                  <DropdownMenuLabel>{name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard" className='flex items-center space-x-2'>
                      <LayoutDashboard className='mr-2 h-4 w-4'/>
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/profile" className='flex items-center space-x-2'>
                      <UserRoundCog className='mr-2 h-4 w-4'/>
                      <span>Edit Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  {role==="User" &&
                    <DropdownMenuItem>
                      <Link href="/dashboard/orders" className='flex items-center space-x-2'>
                        <UserRoundCog className='mr-2 h-4 w-4'/>
                        <span>My Orders</span>
                      </Link>
                    </DropdownMenuItem>
                  }
                  <DropdownMenuItem>
                    <button 
                        onClick={handleLogout}
                        className='flex items-center space-x-2'
                    >
                      <LogOut className='mr-2 h-4 w-4'/>
                      <span>Logout</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
  )
}
