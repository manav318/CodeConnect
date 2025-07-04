import React from 'react'
import { ModeToggle } from './ModeToggle'
import { CodeIcon, User } from 'lucide-react'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
import DashboardBtn from './DashboardBtn'

function Navbar() {
  return (
    <nav className='border-b'>
        <div className='flex h-16 items-center px-4 container mx-auto'>
            <Link
                href='/'
                className='flex items-center gap-2 text-2xl font-semibold mr-6 font-mono hover:opacity-80 transition-opacity'
            >
                <CodeIcon className='size-8 text-emerald-500'/>
                <span className='bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent'>
                    CodeConnect
                </span>
            </Link>

            <SignedIn>
                <div className="flex items-center ml-auto space-x-4">
                    <DashboardBtn/>
                    <ModeToggle/>
                    <UserButton/>
                </div>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar
