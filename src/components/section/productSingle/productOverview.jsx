"use client"
import React, { useContext, useState } from 'react'
import Rating from '../../ui/rating'
import Plus from '@/assets/icons/plus'
import Minus from '@/assets/icons/minus'
import ButtonFill from '@/components/ui/buttons/buttonFill'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/addToCartSlice'
import Link from 'next/link'

const ProductOverview = ({ findProduct }) => {
    const { id, product_name, price, rating, product_overview, product_img } = findProduct
    const [productQuantity, setProductQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleProdcutQuantity = (type) => {
        if (type === "increment") {
            setProductQuantity(productQuantity + 1)
        }
        else {
            if (productQuantity === 1) {
                return
            }
            setProductQuantity(productQuantity - 1)
        }
    }

    return (
        <div >
            <h2 className='[font-size:_clamp(30px,4vw,48px)] font-bold leading-120 text-primary-foreground'>{product_name}</h2>
            <div className='mb-[22px] mt-3 flex justify-between'>
                <h5 className='text-2xl font-bold text-primary-foreground'>${price}</h5>
                <div className='flex items-center gap-2 cursor-pointer'><Rating star={rating} /> <span className='font-semibold'>(13 reviews)</span></div>
            </div>
            <p>{product_overview}</p>
            <div className='flex sm:flex-row flex-col gap-[18px] mt-[45px] sm:max-w-full max-w-56'>
                <div className=' px-4 flex items-center justify-center gap-2 border-[2px] border-primary sm:w-full min-h-14 max-w-44'>
                    <span className="cursor-pointer h-full flex justify-center items-center py-3 px-7" onClick={() => handleProdcutQuantity("decrement")}>
                        <Minus />
                    </span>
                    <input value={productQuantity} readOnly className='text-2xl font-bold max-w-8 text-center outline-none flex justify-center  border-0 ' />
                    <span className="cursor-pointer h-full flex justify-center items-center py-3 px-7" onClick={() => handleProdcutQuantity("increment")}>
                        <Plus />
                    </span>
                </div>
                <ButtonFill onClick={() => dispatch(addToCart({ id, quantity: productQuantity, product_img, product_name, price }))} className={"px-7.5"}>Add to cart</ButtonFill>
            </div>
            <ul className='mt-[45px]'>
                <li className='text-lg flex gap-2 mb-2.5'>
                    <span className='min-w-[111px] inline-block'>SKU: </span>
                    <span>005</span>
                </li>
                <li className='text-lg flex gap-2 mb-2.5'>
                    <span className='min-w-[111px] inline-block'>CATEGORY: </span>
                    <Link href={"#"} className='relative inline-block after:absolute after:left-0 after:bottom-1 after:w-full after:h-[1px] after:bg-primary hover-underline'><span>ACCESSORIES</span></Link>
                </li>
                <li className='text-lg flex gap-2'>
                    <span className='min-w-[111px] inline-block'>TAGS:  </span>
                    <Link href={""} className='relative inline-block after:absolute after:left-0 after:bottom-1 after:w-full after:h-[1px] after:bg-primary hover-underline'><span>LAMP</span></Link>,
                    <Link href={""} className='relative inline-block after:absolute after:left-0 after:bottom-1 after:w-full after:h-[1px] after:bg-primary hover-underline'><span>LIGHTING</span></Link>
                </li>
            </ul>
        </div>
    )
}

export default ProductOverview