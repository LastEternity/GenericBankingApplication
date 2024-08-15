'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount:number}) => {
  return (
    <>
      <p className="w-full">
        <CountUp 
            decimals={2}
            prefix="$"
            end={amount}
        />
      </p>
    </>
  )
}

export default AnimatedCounter
