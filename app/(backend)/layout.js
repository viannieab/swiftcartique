"use client"
import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import { useState } from "react";

 export default function Layout({children}) {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className='flex'>
        {/* side bar */}
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
        <div className='lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen'>
            {/* header */}
            <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/> 
            {/* main body */}
            <main className='p-8 bg-slate-100 dark:bg-slate-950 text-slate-50 min-h-screen mt-14'>
                {children}
            </main>
        </div>
        {/* main body */}
    </div>
  )
}