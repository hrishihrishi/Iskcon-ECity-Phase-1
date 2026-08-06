import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='h-[12vh] flex w-full bg-white shadow-sm'>
        <ul className='flex flex-row items-center justify-between'>
            <li className='navbar-li'>
                <Link href="/">Home</Link>
            </li>
            <li className='navbar-li'>
                <Link href="/about">About</Link>
            </li>
            <li className='navbar-li'>
                <Link href="/seva">Seva</Link>
            </li>
            <li className='navbar-li'>
                <Link href="/contact">Contact Us</Link>
            </li>
            <li className='navbar-li'>
                <Link href="/educate">Educate</Link>
            </li>
             <Link href={"/iskcon/vaishnava-calendar"}>
              <Button
                variant="outline"
                className="bg-purple-900 text-white uppercase"
              >
                View Vaishnava Calendar
              </Button>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar