import React from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'
import { DashboardIcon, GatewayIcon, PayIcon, PayoutIcon, UsersIcon, WalletIcon } from '../Icons'
import { PiArrowLineRightLight } from 'react-icons/pi'
import { IoCloseCircleOutline } from 'react-icons/io5'

const SideMenu = ({ resMenu, setResMenu, collapseMenu, setCollapseMenu }) => {
    const router = useLocation();



    const linkList = [
        {
            path: '/',
            title: 'Dashboard',
            icon: <DashboardIcon />
        },
        {
            path: '/paying',
            title: 'Paying',
            icon: <PayIcon />
        },
        {
            path: '/payouts',
            title: 'Payouts',
            icon: <PayoutIcon />
        },
        {
            path: '/wallet',
            title: 'Wallets',
            icon: <WalletIcon />
        },
        {
            path: '/gateways',
            title: 'Gateways',
            icon: <GatewayIcon />
        },
        {
            path: '/staff',
            title: 'Staff',
            icon: <UsersIcon />
        },
    ]


  return (
    <>
        <aside className={`w-[280px] bg-dark fixed lg:top-4 top-0 lg:left-4 left-0 lg:min-h-[calc(100vh-32px)] min-h-screen rounded-lg overflow-hidden z-40
                -translate-x-full invisible lg:translate-x-0 lg:visible transition-all duration-300
                ${resMenu ? "!translate-x-0 !visible" : ""}
                ${collapseMenu ? 'lg:w-[80px]' : ''}
            `}>
            <div className="px-5 py-3 bg-[#152248] flex items-center justify-between">
                <Link to={'/'} className={`${collapseMenu ? 'lg:hidden' : 'inline-block'}`}>
                    <img src={'/assets/images/seamless-logo.png'} alt={'Seamless'} className='w-auto h-5 md:h-6 lg:h-7 ' />
                </Link>
                <button
                    onClick={() => { 
                        setCollapseMenu(!collapseMenu)
                    }}
                    type='button' 
                    className="w-10 h-10 text-white text-2xl md:text-4xl hidden lg:block"
                >
                    {
                        collapseMenu ? <PiArrowLineRightLight className='text-2xl md:text-3xl' /> : <HiOutlineBars3BottomLeft />
                    } 
                </button>
                <button type='button' onClick={()=>setResMenu(!resMenu)} className="w-8 h-8 text-white text-3xl flex items-center justify-center lg:hidden">
                    <IoCloseCircleOutline />
                </button>
            </div>
            <div className="px-3 py-4">
                <ul>
                    {
                        linkList.map((link, index) => (
                            <li key={index} className="mb-3">
                                <Link to={link.path} className={`
                                        menu__link flex items-center gap-3 px-4 py-2 text-base md:text-lg font-semibold  hover:text-primary whitespace-nowrap
                                        ${router.pathname === link.path ? 'text-white active' : 'text-primary-light'} 
                                    `}>
                                    <span className='w-7 h-7 flex items-center justify-center'> 
                                        {link.icon}
                                    </span>
                                    <span className={`${collapseMenu ? 'lg:hidden' : 'block'}`}>{link.title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    </>
  )
}

export default SideMenu