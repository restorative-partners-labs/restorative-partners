"use client"
import React, { useState } from 'react'
import TopNavbar from './topNavbar'
import MobileNavbar from './mobileNavbar'
import Logo from '@/assets/icons/logo'
import Link from 'next/link'
import { menuListTwo } from '@/lib/fackData/menuListTwo'
import DropDownMenu from './dropDownMenu'
import MegaMenuTwo from './megaMenuTwo'
import Search from '@/assets/icons/search'
import ShopCart from '@/assets/icons/shopCart'
import Offcanvas from './offCanvas'
import Cart from './cart'
import { countCartProductQuantity } from '@/lib/utils'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import useActiveNavLink from '@/hooks/useActiveNavLink'
import useStickyHeader from '@/hooks/useStickyHeader'

const HeaderFour = () => {
    const { products } = useSelector((state) => state.addToCart)
    const [offcanvaseActive, setOffcanvaseActive] = useState(false)
    const [cartActive, setCartActive] = useState(false)

    useStickyHeader()
    const pathName = usePathname()
    const home = "/home-4"
    useActiveNavLink(pathName, home)

    return (
        <header className='absolute z-50 top-0 left-0 w-full bg-gray  overflow-x-clip'>
            <div className='hidden xl:block'>
                <TopNavbar />
            </div>
            <div className='border-border border-t border-b hidden xl:block container-fluid'>
                <div className='bottom-navbar'>
                    <div className='relative flex justify-between items-center'>
                        <div>
                            <Link href="/" className='text-primary-foreground'>
                                <Logo height={"31"} width={"219"} />
                            </Link>
                        </div>
                        <nav>
                            <ul className='flex items-center'>
                                {
                                    menuListTwo.map(({ id, isDropdown, name, path, isMegaMenu }) => {
                                        return (
                                            <li key={id} className=' group'>
                                                <Link href={path} data-id={id} className={`nav-link text-xl font-medium px-7 py-[34px] flex items-center gap-2 group-hover:bg-muted group-hover:text-secondary-foreground`}>
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
                                                    isDropdown.length && <DropDownMenu dropDownList={isDropdown} parentId={id} bgColor={"bg-muted"} />
                                                }
                                                {
                                                    isMegaMenu.length && <MegaMenuTwo dropDownList={isMegaMenu} parentId={id} />
                                                }
                                            </li>
                                        )
                                    })
                                }
                                <li className='other_icon text-primary-foreground px-6  cursor-pointer' onClick={() => setOffcanvaseActive(true)}>
                                    <Search height={"24"} width={"24"} />
                                </li>
                                <li className='other_icon text-primary-foreground pl-6 relative cursor-pointer flex items-center' onClick={() => setCartActive(true)}>
                                    <ShopCart height={"24"} width={"24"} />
                                    {
                                        products.length ? <span className='font-medium flex items-center justify-center text-secondary-foreground text-sm absolute -top-3 -right-4 w-6 h-6 bg-primary rounded-full'>{countCartProductQuantity(products)}</span> : ""
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Offcanvas setOffcanvaseActive={setOffcanvaseActive} offcanvaseActive={offcanvaseActive} bg_muted={"bg-muted"} />
                    <Cart setCartActive={setCartActive} cartActive={cartActive} />
                </div>
            </div>
            <div className='xl:hidden block'>
                <MobileNavbar bg_muted={'bg-muted'} />
            </div>
        </header >
    )
}

export default HeaderFour