import Image from 'next/image'
import Link from 'next/link'
import ButtonFill from '../ui/buttons/buttonFill'

const MegaMenuTwo = ({ dropDownList }) => {
    return (
        <div className='absolute z-50 left-1/2 -translate-x-1/2 bg-muted flex max-w-[670px] w-full transition-all duration-500 max-h-0 overflow-hidden  group-hover:max-h-[450px] '>
            <div className='flex justify-between flex-wrap'>
                {
                    dropDownList.map(({ menus, id }) => {
                        return (
                            <ul key={id} className='w-1/2 last:w-full relative after:absolute after:top-0 after:right-0 after:contents-[""] after:bg-primary_rgba  after:w-[2px] after:h-full' >
                                {
                                    menus.map(({ id, path, name, desc, img }) => {
                                        return (
                                            <li key={id}>
                                                {img ?
                                                    <div className='relative  mt-12.5 ' >
                                                        <Image src={img} alt={name} loading='lazy'      className='w-full h-full' />
                                                        <div className='w-full h-full flex justify-between items-center absolute top-0 px-[25px]'>
                                                            <p className='text-secondary-foreground text-2xl font-extrabold leading-[123%] max-w-[265px] '>{name}</p>
                                                            <Link href={path} >
                                                                <ButtonFill className="after:bg-secondary border-secondary text-primary-foreground hover:text-secondary-foreground">{desc}</ButtonFill>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className='px-6 pt-7.5 ' >
                                                        <Link href={path} className='text-secondary-foreground text-lg font-bold  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '>{name}</Link>
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
        </div>
    )
}

export default MegaMenuTwo