"use client"
import { useState } from 'react'
import Image from 'next/image'


const ProductPreview = ({ findProduct }) => {
    const { product_img, prodcut_album } = findProduct
    const [imageUrl, setImageUrl] = useState(product_img.src)
    return (
        <div>
            <div>
                <Image src={imageUrl} loading='lazy'      width={650} height={820} alt='lamp' className='max-h-[820px] h-full' />
            </div>
            <div className='flex gap-5 mt-6'>
                {
                    prodcut_album.map((img, index) => {
                        return (
                            <Image key={index} width={120} height={120} onClick={() => setImageUrl(img.src)} src={img.src} alt={`img_${index}`} loading='lazy'      className='max-w-[112px] w-full max-h-[112px] h-full cursor-pointer' />
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default ProductPreview