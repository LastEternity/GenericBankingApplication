import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Adrian', lastName: 'Ros', email:"adrian.s.rosing@gmail.com"}

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Acceess and manage your account."
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1000.00}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 100.00},{ currentBalance: 200.00}]}/>


    </section>
  )
}

export default Home