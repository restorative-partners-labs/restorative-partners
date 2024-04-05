import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RightArrow from '@/assets/icons/rightArrow'
import ButtonFill from '../ui/buttons/buttonFill'

const MegaMenu = ({ dropDownList, parentId }) => {
    return (
        <div className='absolute z-50 left-1/2 -translate-x-1/2 bg-primary flex max-w-[1320px] w-full transition-all duration-500 max-h-0 overflow-hidden  group-hover:max-h-[370px] '>
            {
                dropDownList.map(({ menus, id }) => {
                    return (
                        <ul key={id} className='w-full relative after:absolute after:top-0 after:-right-1 after:contents-[""] after:bg-primary_rgba last:after:bg-transparent after:w-[2px] after:h-full'>
                            {
                                menus.map(({ id, path, name, desc, img }) => {
                                    return (
                                        <li key={id}>
                                            {img ?
                                                <div className=' relative' >
                                                    <Image src={img} alt={name} loading='lazy'      className='w-full h-full' />
                                                    <p className='text-secondary-foreground text-[34px] font-extrabold leading-[134%]  absolute top-6 left-6'>{name}</p>
                                                    <Link href={path} >
                                                        <ButtonFill className="absolute  bottom-4 left-6 w-[83%] after:bg-secondary border-secondary text-primary-foreground right-0 hover:text-secondary-foreground">{desc} <RightArrow width={"35"} height={"22"} /></ButtonFill>
                                                    </Link>
                                                </div>
                                                :
                                                <div className='px-6 pt-7.5 ' >
                                                    <Link href={path} data-id={parentId} className='dropdown-item text-secondary-foreground text-lg font-bold  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '>{name}</Link>
                                                    <span className='block text-secondary_rgba text-sm'>{desc}</span>
                                                </div>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }

        </div>
    )
}

export default MegaMenu