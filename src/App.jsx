import React, { useState } from 'react'
import rawData from './data.json'
import favicon from '/images/logo.svg'

const App = () => {
  const [data, setData] = useState(rawData)

  const total = data.reduce((acc, item) => acc + item.amount, 0);
  const myBalance = 921.48;

  return (
    <div className='min-h-screen bg-[#F7E9DC] 
        
        pt-30
        sm: px-2
        md: px-5
        lg: px-20
      '>

      <div className="max-w-lg mx-auto">

        {/* Upper Box */}
        <div className='bg-[#EC755D] rounded-xl mb-7 flex justify-between px-[32px] py-[30px]'>

          <div>
            <h1 className='text-white font-sm mb-3'>My balance</h1>
            <p className='text-white text-3xl font-bold'>${myBalance}</p>
          </div>

          <div>
            <img
              src={favicon}
              alt="favicon"
              className='w-16 h-16'
            />
          </div>
        </div>

        {/* Lower Box */}
        <div className="bg-[#FFFCF7] rounded-xl mb-7 px-[32px] pt-[30px] pb-[10px]">
          {/* 1 */}
          <p className='text-[#392316] text-3xl font-bold mb-18'>Spending - Last 7 days</p>

          {/* 2 */}
          <div className="flex justify-between gap-2 h-[200px] mb-12 border-b-1 border-gray-200 pb-3">
            {data.map((item, index) => {
              const maxAmount = Math.max(...data.map(d => d.amount), 1);
              const heightPercent = (item.amount / maxAmount) * 100;

              return (
                <div
                  key={index}
                  className="flex flex-col-reverse items-center group w-[11%] sm:w-[12%] relative flex-1"
                >
                  {/* Bar - now grows from bottom */}
                  <div
                    className={`w-full rounded-md cursor-pointer transition-all duration-300 ${item.amount === maxAmount ? 'bg-[#76B5BC] hover:bg-[#B4DFE5]' : 'bg-[#EC755D] hover:bg-[#FF9B87]'
                      }`}
                    style={{ height: `${heightPercent}%`, minHeight: '1px' }}
                  ></div>

                  {/* Tooltip - position adjusted */}
                  <div className="bg-[#392316] text-white text-sm px-2 py-1 rounded mb-1 opacity-0 group-hover:opacity-100 transition-all absolute -top-8 z-10">
                    ${item.amount}
                  </div>

                  {/* Day label - now at the bottom */}
                  <p className="text-[#92857A] text-sm mt-auto">{item.day}</p>
                </div>
              );
            })}
          </div>

          {/* 3 */}
          <div className="flex justify-between mt-5 pt-2">
            <div className="left">
              <p className='text-[#A49D95] text-base'>Total this month</p>
              <p className='text-[#392316] text-4xl font-bold mb-6'>${total}</p>
            </div>

            <div className="right">
              <p className='text-[#392316] text-2xl font-bold'>+2.4%</p>
              <p className='text-[#A49D95] text-base'>from last month</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App