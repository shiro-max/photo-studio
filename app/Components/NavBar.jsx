import Link from 'next/link'
import React from 'react'
import { getNavBar } from '../api/fetch'
import Image from 'next/image'

const NavBar = async () => {
    const BASE_URL = process.env.STRAPI_IMG_ENDPOINT
    const navData = await getNavBar();
    
    return (
        <div className='nav-bar'>
            <Image
                className="nav-logo"
                src={`${BASE_URL}${navData?.logo.image.url}`}
                alt={navData?.logo[0]?.alternativeText || "Post image"}
                width={60}
                height={60}
                priority={true}
                />
            <nav >
                {navData?.Link && navData?.Link?.map((link)=>(
                    <Link key={link.name} href={link.path}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default NavBar