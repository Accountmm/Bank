import { logOut } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

const Footer: FC<FooterProps> = ({ user, type }) => {
  const router = useRouter()
  async function handleLogOut() {
    const loggedOut = await logOut()

    if (loggedOut) {
      router.push('/sign-up')
    }
  }
  return (
    <footer className='footer'>
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className='text-xl font-bold text-gray-700'>{user.name[0]}</p>
      </div>
      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h3 className='text-14 truncate text-gray-700 font-semibold'>{user.name}</h3>
        <p className='text-14 truncate text-gray-600 font-normal'>{user.email}</p>
      </div>
      <div className='footer_image'>
        <Image src='/icons/logout.svg' fill alt='logout' onClick={handleLogOut} />
      </div>
    </footer>
  )
}

export default Footer