"use client"
import Image from 'next/image'
import ShopCart from '@/assets/icons/shopCart'
import Rating from '../rating'
import { cn } from '@/lib/utils'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/addToCartSlice'
import Link from 'next/link'


const ProductCard = ({ product_img, product_name, price, rating, text_muted, bg_muted, id }) => {
    const dispatch = useDispatch()

    return (
        <div className='group'>
            <div className='relative' >
                <div className='absolute z-10 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <button onClick={() => dispatch(addToCart({ id, quantity: 1, product_img, product_name, price }))} className={cn(` px-[25px] py-2.5 flex items-center gap-2.5 border-white hover:border-primary text-white border-2 whitespace-nowrap relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:z-[-1] after:bg-primary after:${bg_muted} after:w-0 after:transition-all after:duration-500 hover:after:w-full text-secondary-foreground hover:text-secondary-foreground transition-all duration-500`)}>Add Cart <ShopCart height={"24"} width={"24"} /></button>
                </div>
                <div className='relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-500 after:group-hover:w-full after:group-hover:h-full after:group-hover:opacity-100 after:h-0 after:w-0 after:opacity-0 after:flex after:justify-center after:items-center after:bg-[rgba(37,_59,_47,_0.38)] after:group-hover:blur-sm'>
                    <Image src={product_img} loading='lazy'      alt={product_name} className='w-full h-full max-h-[506px]' />
                </div>
            </div>
            <div className='mt-[21px] flex justify-between'>
                <div>
                    <Link href={`/product-single`} className={cn(`text-2xl font-semibold text-primary-foreground leading-160 hover-underline ${text_muted}`)}> <span>{product_name}</span> </Link>
                    <p className={cn(`text-2xl text-primary-foreground ${text_muted}`)}>${price}</p>
                </div>
                <div className='mt-2'><Rating star={rating} /></div>
            </div>
        </div>
    )
}

export default ProductCard