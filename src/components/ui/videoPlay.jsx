"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {motion} from "framer-motion"
import PlayIcon from '@/assets/icons/playIcon'
import ModalVideo from 'react-modal-video';
import '/node_modules/react-modal-video/scss/modal-video.scss';
import useOverflowHidden from '@/hooks/useOverflowHidden';
import { cardSlideAnimation } from '@/lib/utils';

const VideoPlay = ({ img }) => {
    const [isOpen, setOpen] = useState(false);
    useOverflowHidden(isOpen)
    return (
        <>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardSlideAnimation()}
                viewport={{ once: true, amount: 0.2 }}
                className='relative max-h-[400px] mt-10 lg:mt-0'
            >
                <Image src={img} loading='lazy'      alt='video' width={"auto"} height={"auto"} className='w-full max-w-[698px] mx-auto h-full' />
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="lfDZJqSrIuk"
                    onClose={() => setOpen(false)}
                />

                <div onClick={() => setOpen(true)} className=' md:w-[109px] md:h-[109px] w-24 h-24 rounded-full text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9]/[.78] cursor-pointer flex justify-center items-center'>
                    <span className='ml-2.5'><PlayIcon width={"30"} height={"36"} /></span>
                </div>
            </motion.div>

        </>
    )
}

export default VideoPlay