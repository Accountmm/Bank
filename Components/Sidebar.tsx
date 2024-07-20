'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
import Footer from './Footer'

const Sidebar: FC<SiderbarProps> = ({ user }) => {
  const pathname = usePathname()
  return (
    <section className='sidebar'>
      <div className='flex flex-col  gap-4'>
        <Link href={'/'} className='flex mb-12 cursor-pointer items-center gap-2'>
          <Image
            src={'/icons/logo.svg'}
            alt='logo'
            width={34}
            height={34}
            className='size-[44px] max-xl:size-14'
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>

      <Footer user={user} type='dekstop' />
    </section >
  )
}

export default Sidebar