import Link from 'next/link'
import { Moon } from "lucide-react"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
        {/* left */}
        collapseButton
        <div className='flex items-center gap-4'>
            <Link href="/"></Link>
            <Moon />
        </div>
    </nav>
  )
}

export default Navbar