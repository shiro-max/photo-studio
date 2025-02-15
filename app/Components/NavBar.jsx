import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <h2 className='nav-logo' >logo</h2>
            <nav >
                <Link href='/'>about</Link>
            </nav>
        </div>
    )
}

export default NavBar