import Image from 'next/image'
import React, { useEffect } from 'react'
import ButtonFill from '../ui/buttons/buttonFill'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '@/redux/addToCartSlice'
import { countCartProductQuantity } from '@/lib/utils'
import useOverflowHidden from '@/hooks/useOverflowHidden'


const Cart = ({ setCartActive, cartActive }) => {
    const { products } = useSelector((state) => state.addToCart)
    const dispatch = useDispatch()

    const totalPrice = products.reduce((total, product) => total + product?.price * product?.quantity, 0);

    // useOverflowHidden(cartActive)

    return (
        <>
            <div onClick={() => setCartActive(false)} className={`bg-overlay h-full fixed z-30 right-0 top-0 transition-all w-full ${cartActive ? " visible" : "invisible"}`}></div>
            <div className={`bg-background 2sm:px-17.5 px-5 2sm:py-30 py-16 max-w-[552px] max-h-screen min-h-screen overflow-y-auto w-full fixed z-40 top-0 transition-all duration-700 ${cartActive ? "right-0" : "-right-full"}`}>
                <div className='flex justify-between items-center'>
                    <h5 className='text-xl font-bold text-primary-foreground'>Your Cart ({countCartProductQuantity(products)})</h5>
                    <p className='text-xl font-bold cursor-pointer text-primary-foreground' onClick={() => setCartActive(false)}>Close (X)</p>
                </div>
                <div className='flex flex-col justify-between h-[calc(100vh - 270px]'>
                    <div className='mt-[62px]'>
                        {products.length === 0 && <h3 className='text-4xl 2sm:text-6xl font-extrabold'>No Product your cart</h3>}
                        <ul>
                            {
                                products.map(({ id, price, product_img, product_name, quantity }, index) => {
                                    return (
                                        <li key={index} className='flex items-center justify-between mb-[22px] last:mb-0'>
                                            <div className='flex items-center gap-6'>
                                                <Image src={product_img.src} loading='lazy'      width={"106"} height={"126"} alt='shop img' />
                                                <div>
                                                    <p className='text-xl font-bold mb-[13px] text-primary-foreground'>{product_name}</p>
                                                    <span className='text-lg inline-block text-primary-foreground'>Qty <span className='font-bold text-xl inline-block ml-[22px]'>{quantity}</span> </span>
                                                </div>
                                            </div>
                                            <div>
                                                <p onClick={() => dispatch(removeToCart(id))} className='text-xl mb-[13px] text-end cursor-pointer text-primary-foreground'>(X)</p>
                                                <span className='text-xl font-bold text-end text-primary-foreground'>${price}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className='mt-14'>
                        <div className='flex justify-between items-center'>
                            <h5 className='text-xl font-bold text-primary-foreground'>Subtotal:</h5>
                            <h5 className='text-xl font-bold text-primary-foreground'>${totalPrice}</h5>
                        </div>
                        <div className='mt-7 flex gap-[27px] items-center'>
                            <ButtonFill className={'px-7.5 py-2.5 w-full justify-center'}>View Cart</ButtonFill>
                            <ButtonFill className={'px-7.5 py-2.5 w-full justify-center after:bg-secondary text-primary-foreground'}>Checkout</ButtonFill>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart