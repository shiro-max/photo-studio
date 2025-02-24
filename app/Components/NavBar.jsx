import Link from 'next/link'

import Image from 'next/image'

const NavBar =  ({data}) => {
    const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_IMG_ENDPOINT
    const navData =  {data};

    return (
        <div className='nav-bar'>
            <Image
                className="nav-logo"
                src={`${BASE_URL}${navData?.data?.logo[0]?.image.url}`}
                alt={navData?.data?.logo[0]?.alternativeText || "Post image"}
                width={60}
                height={60}
                priority={true}
                />
            <nav >
                {navData?.data?.links?.map((link)=>(
                    <Link key={link.name} href={link.path}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default NavBar