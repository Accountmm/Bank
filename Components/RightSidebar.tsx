import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import BankCard from './BankCard'

const RightSidebar: FC<RightSidebarProps> = ({ banks, transactions, user }) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>

        <div className='profile-banner' />

        <div className='profile'>

          <div className='profile-img'>
            <span className='text-5xl font-bold text-blue-500 '>{user.firstName[0]}</span>
          </div>

          <div className='profile-details'>
            <h1 className='profile-name'>{user.firstName} {user.lastName}</h1>
            <p className="profile-email">{user.email}</p>
          </div>

        </div>
      </section>

      <section className='banks'>
        <div className='flex justify-between w-full' >
          <h2 className='header-2'>My banks</h2>

          <Link href={'/'} className='flex gap-2'>
            <Image
              src='/icons/plus.svg'
              width={20}
              height={20}
              alt='plus'
            />
            <p className='text-16 text-gray-600 font-semibold'>Add bank</p>
          </Link>
        </div>

        {
          banks?.length && (
            <div className='relative flex flex-1 flex-col justify-center items-center gap-5'>
              <div className='relative z-10'>
                <BankCard
                  account={banks[0]}
                  key={banks[0].$id}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
              {
                banks[1] && (
                  <div className='absolute w-[90%] z-0 top-8 right-0'>
                    <BankCard
                      account={banks[1]}
                      key={banks[1].$id}
                      userName={`${user.firstName} ${user.lastName}`}
                      showBalance={false}
                    />
                  </div>
                )
              }
            </div>
          )
        }
      </section>
    </aside>
  )
}

export default RightSidebar