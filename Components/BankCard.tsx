import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const BankCard: FC<CreditCardProps> = ({ account, userName, showBalance }) => {
  return (
    <div className='flex flex-col'>
      <Link href={'/'} className='bank-card'>
        <div className='bank-card_content'>
          <div>
            <h1 className='text-16 font-semibold text-white'>
              {userName}
            </h1>
            <p className='font-ibm-plex-serif text-white font-black'>{formatAmount(account.currentBalance)}</p>
          </div>

          <article className='flex flex-col gap-2 text-white'>
            <div className='flex justify-between'>
              <h2 className='text-12  font-semibold'>
                {userName}
              </h2>
              <h2 className='text-12  font-semibold'>
                ●● / ●●
              </h2>
            </div>

            <p className='text-14 font-semibold tracking-[1.1px]'>●●●● ●●●● ●●●● <span className='text-16'>$1234</span></p>
          </article>
        </div>

        <div className='bank-card_icon'>
          <Image
            src={'/icons/Paypass.svg'}
            alt='pay'
            width={20}
            height={24}
          />
          <Image
            src={'/icons/mastercard.svg'}
            width={45}
            height={32}
            alt='mastercard'
            className='ml-5'
          />
          <Image
            src={'/icons/lines.svg'}
            width={316}
            height={190}
            className='absolute top-0 left-0'
            alt='lines'
          />
        </div>
      </Link>

      {/* COPY */}
    </div>
  )
}

export default BankCard