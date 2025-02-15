import Image from 'next/image'
import { getHeroSection } from '../api/fetch'
import Link from 'next/link';

const HeroSection = async () => {
    // base url for image
    const BASE_URL = process.env.STRAPI_IMG_ENDPOINT
    const heroData = await getHeroSection();
    return (
        <div className='hero-section'>
            <Image
                className="hero-image"
                src={`${BASE_URL}${heroData.image.url}`}
                alt={heroData.image.alternativeText || "Post image"}
                width={1600}
                height={1600}
                priority={true}
            />
            <div className='hero-content'>
                <Link href={heroData.cta.href}>Destination </Link>
                <h3>{heroData.title} title</h3>
                <small>{heroData.description}</small>
            </div>
        </div>
    )
}

export default HeroSection