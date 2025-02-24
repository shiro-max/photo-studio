import Image from 'next/image'
import Link from 'next/link';

const HeroSection = ({ data }) => {
    // base url for image
    const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_IMG_ENDPOINT
    const heroData = { data };
    
    return (
        <div className='hero-section'>
            <Image
                className="hero-image"
                src={`${BASE_URL}${heroData?.data?.image?.url}`}
                alt={heroData?.data?.image?.alternativeText || "Post image"}
                width={1600}
                height={1600}
                priority={true}
            />
            <div className='hero-content'>
                <Link href={heroData?.data?.cta?.path}>{heroData?.data?.cta?.name} </Link>
                <h3>{heroData?.data?.heading} </h3>
                <small>{heroData?.data?.description}</small>
            </div>
        </div>
    )
}

export default HeroSection