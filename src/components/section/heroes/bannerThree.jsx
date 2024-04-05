
import React from 'react'
import TextTyped from '../../ui/textTyped'
import Link from 'next/link'
import ButtonFill from '@/components/ui/buttons/buttonFill'
import RightArrow from '@/assets/icons/rightArrow'

const BannerThree = () => {
    return (

        <div className="relative overflow-x-hidden">
            <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
                <video autoPlay loop muted className="absolute inset-0 object-cover h-screen w-full">
                    <source
                        src="../video-3.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className='container'>
                    <div className="absolute top-1/2 -translate-y-1/2">
                        <h1 className='text-white [font-size:_clamp(60px,10vw,150px)] font-extrabold leading-[90%]'>
                            Shaping Interior <br />
                            <TextTyped text={['Excellence', 'Sophistication', 'Elegance', 'Brilliance', 'Harmony']} />
                        </h1>
                        <Link href={"/project-archive"} className='mt-16 inline-block'>
                            <ButtonFill className={`sm:px-10 px-4 after:left-0 after:bg-secondary text-primary-foreground border-secondary hover:text-secondary-foreground`}> Explore Our Portfolio <RightArrow width={"35"} height={"22"}/> </ButtonFill>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BannerThree