import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const WalletInfo = ({ historyTable, setHistoryTable }) => {
    

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-8">
            <div className='flex'>
                <div onClick={()=>setHistoryTable('wallet1')} className="w-full p-5 lg:p-8 text-left bg-[#EC8153] rounded-xl relative">
                    <Link to={"#"} className='inline-flex p-1 rounded-full absolute top-4 right-4 z-10 text-3xl md:text-3xl text-white hover:bg-white/25 hover:text-white'>
                        <GoArrowRight />
                    </Link>
                    <img src="/assets/images/wallet-card-bg-image.png" className='absolute top-0 left-0 object-cover w-full h-full' alt="Layer" />
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-5">Company name</h2>
                    <p className="text-sm sm:text-base lg:text-[17px] text-white mb-2">
                    Trade Wallet
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        $35862
                    </p>
                </div>
            </div>  
            <div className='flex'>
                <div onClick={()=>setHistoryTable('wallet2')} className="w-full p-5 lg:p-8 text-left bg-[#70B944] rounded-xl relative">
                    <Link to={"#"} className='inline-flex p-1 rounded-full absolute top-4 right-4 z-10 text-3xl md:text-3xl text-white hover:bg-white/25 hover:text-white'>
                        <GoArrowRight />
                    </Link>
                    <img src="/assets/images/wallet-card-bg-image-light.png" className='absolute top-0 left-0 object-cover w-full h-full' alt="Layer" />
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-5">Company name</h2>
                    <p className="text-sm sm:text-base lg:text-[17px] text-white mb-2">
                    Trade Wallet
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        $35862
                    </p>
                </div>
            </div>  
            <div className='flex'>
                <div onClick={()=>setHistoryTable('wallet3')} className="w-full p-5 lg:p-8 text-left bg-[#6647BF] rounded-xl relative">
                    <Link to={"#"} className='inline-flex p-1 rounded-full absolute top-4 right-4 z-10 text-3xl md:text-3xl text-white hover:bg-white/25 hover:text-white'>
                        <GoArrowRight />
                    </Link>
                    <img src="/assets/images/wallet-card-bg-image-white.png" className='absolute top-0 left-0 object-cover w-full h-full' alt="Layer" />
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-5">Company name</h2>
                    <p className="text-sm sm:text-base lg:text-[17px] text-white mb-2">
                    Trade Wallet
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        $35862
                    </p>
                </div>
            </div>  


        </div>
        {/* grid */}
    </>
  )
}

export default WalletInfo