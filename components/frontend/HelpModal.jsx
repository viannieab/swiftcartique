'use client';
import { Button, Modal } from 'flowbite-react'
import { CornerDownLeft, HelpCircle, MessageSquare, PhoneCall, Truck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react'

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false)
   return (
    <>
     <button onClick={() => setOpenModal(true)}
        className="flex items-center space-x-1 text-green-950 dark:text-slate-100">
        <HelpCircle/>
        <span>Help</span>
    </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Need Help? Get in touch with the Experts</Modal.Header>
        <Modal.Body>
            <div className="grid grid-cols-2 gap-6">
                <Link href='tel:256761540612' className='flex items-center space-x-2 text-green-950 dark:text-slate-100'>
                    <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <PhoneCall className='w-4 h-4 text-lime-800'/>
                    </div>
                    <span>Call: 0785885880</span>
                </Link>
                <Link href='/track' className='flex items-center space-x-2 text-green-950 dark:text-slate-100'>
                    <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <Truck className='w-4 h-4 text-lime-800'/>
                    </div>
                    <span>Truck Orders</span>
                </Link>
                <Link href='/returns' className='flex items-center space-x-2 text-green-950 dark:text-slate-100'>
                    <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <CornerDownLeft className='w-4 h-4 text-lime-800'/>
                    </div>
                    <span>Returns & Refunds</span>
                </Link>
                <Link href='/chat' className='flex items-center space-x-2 text-green-950 dark:text-slate-100'>
                    <div className="flex items-center w-8 h-8 bg-lime-100 justify-center rounded-full">
                        <MessageSquare className='w-4 h-4 text-lime-800'/>
                    </div>
                    <span>Chat with Us!</span>
                </Link>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
