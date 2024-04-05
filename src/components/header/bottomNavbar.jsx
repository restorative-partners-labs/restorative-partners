"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import DropDownMenu from './dropDownMenu'
import MegaMenu from './megaMenu'
import Logo from '@/assets/icons/logo';
import Search from '@/assets/icons/search';
import { menuList } from '@/lib/fackData/menuList';
import Offcanvas from './offCanvas'
import Cart from './cart'
import { cn, countCartProductQuantity,  } from '@/lib/utils'
import ShopCart from '@/assets/icons/shopCart'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import useActiveNavLink from '@/hooks/useActiveNavLink'
import useStickyHeader from '@/hooks/useStickyHeader'

const BottomNavbar = ({ linkColor }) => {
    const { products } = useSelector((state) => state.addToCart)
    const [offcanvaseActive, setOffcanvaseActive] = useState(false)
    const [cartActive, setCartActive] = useState(false)

    useStickyHeader(linkColor)
    const pathName = usePathname()
    useActiveNavLink(pathName)


    return (
        <>
            <div className='bottom-navbar flex justify-between items-center'>
                <div>
                    <Link href="/" className={cn(`logo text-primary-foreground ${linkColor}`)}>
                        <Logo height={"31"} width={"219"} />
                    </Link>
                </div>
                <nav>
                    <ul className='flex items-center'>
                        {
                            menuList.map(({ id, isDropdown, name, path, isMegaMenu }) => {
                                return (
                                    <li key={id} className='group'>
                                        <Link href={path} data-id={id} className={cn(`nav-link text-xl font-medium px-7 py-[34px] flex items-center gap-2  group-hover:bg-primary group-hover:text-secondary-foreground ${linkColor}`)}>
                                            {name}
                                            {
                                                (isDropdown || isMegaMenu) &&
                                                <span className={` transition-all duration-500 rotate-180 group-hover:rotate-0 group-hover:text-secondary-foreground`}>
                                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 8L6 2L1 8" />
                                                    </svg>
                                                </span>
                                            }
                                        </Link>
                                        {
                                            isDropdown.length && <DropDownMenu dropDownList={isDropdown} parentId={id} />
                                        }
                                        {
                                            isMegaMenu.length && <MegaMenu dropDownList={isMegaMenu} parentId={id} />
                                        }
                                    </li>
                                )
                            })
                        }
                        <li className={cn(`other_icon text-primary-foreground px-6 cursor-pointer ${linkColor}`)} onClick={() => setOffcanvaseActive(true)}>
                            <Search height={"24"} width={"24"} />
                        </li>
                        <li className={cn(`other_icon text-primary-foreground pl-6 cursor-pointer flex relative ${linkColor}`)} onClick={() => setCartActive(true)}>
                            <ShopCart height={"24"} width={"24"} />
                            {
                                products.length ? <span className='font-medium flex items-center justify-center text-secondary-foreground text-sm absolute -top-3 -right-4 w-6 h-6 bg-primary rounded-full'>{countCartProductQuantity(products)}</span> :""
                            }
                        </li>
                    </ul>
                </nav>
            </div>
            <Offcanvas setOffcanvaseActive={setOffcanvaseActive} offcanvaseActive={offcanvaseActive} />
            <Cart setCartActive={setCartActive} cartActive={cartActive} />
        </>
    )
}

export default BottomNavbar