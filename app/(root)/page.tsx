import HeaderBox from '@/Components/HeaderBox'
import RightSidebar from '@/Components/RightSidebar'
import TotalBalanceBox from '@/Components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: 'Mirabbos', lastName: 'Mirobidov', email: 'pro@gmail.com' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            text='Acces and manage your account and transactions efficently.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>


        RECENT
      </div>

      <RightSidebar banks={[{ currentBalance: 135.50 }, { currentBalance: 100.4 }]} transactions={[]} user={loggedIn} />
    </section>
  )
}

export default Home