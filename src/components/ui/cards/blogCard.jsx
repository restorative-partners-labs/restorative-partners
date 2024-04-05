import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({thumb, date, tag, title, text_muted }) => {
  return (
    <Link href={"/blog-single"} className='hover-underline'>
      <Image src={thumb} loading='lazy'      alt={title} width={"auto"} height={"auto"} className='w-full h-auto' />
      <div className='mt-8'>
        <p className={cn(`text-primary-foreground flex items-center gap-2 mb-2.5`)}> <small className='text-lg'>{date}</small> / <small className='text-lg'>{tag}</small> </p>
        <span className={cn(`text-primary-foreground font-semibold text-2xl ${text_muted}`)}>{title}</span>
      </div>
    </Link>
  )
}

export default BlogCard