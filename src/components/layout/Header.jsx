import React, { useEffect, useState } from 'react' 
import { Dropdown } from 'antd';
import { PiUserCircleFill } from 'react-icons/pi';
import { FaBell } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';


const items = [ 
    {
        label: <Link to={"#"} className='text-sm md:text-base font-semibold'>Profile</Link>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: <Link to={"#"} className='text-sm md:text-base font-semibold'>Logout</Link>,
        key: '3',
    },
];

const Header = ({resMenu, setResMenu, collapseMenu, setCollapseMenu}) => {
    const router = useLocation();
    const [menuMode, setMenuMode] = useState('light'); 

    // set sidebar menu bg color based on url
    useEffect(()=>{
        if (router.pathname === '/wallet' || router.pathname === '/payouts') {
            setMenuMode('dark');
        } else {
            setMenuMode('light');
        }  
    }, [router.pathname])

    return (
        <div className={`sm:px-5 px-3 py-3 flex items-center justify-between bg-white`}>
            <div className="inline-flex items-center gap-3">
                <button type='button' onClick={()=>setResMenu(!resMenu)} className="text-3xl sm:text-3xl text-dark lg:hidden">
                    <HiBars3 />
                </button>
                <h1 className='text-base md:text-lg lg:text-xl font-semibold text-dark m-0'>
                    { router.pathname === '/' && <>Dashboard</> }
                    { router.pathname === '/paying' && <>Paying</> }
                    { router.pathname === '/wallet' && <>Wallet</> }
                    { router.pathname === '/payouts' && <>Payouts</> }
                </h1>
            </div>

            <div className="inline-flex items-center gap-4">
                <button type='button' className={`w-8 h-8 rounded-full inline-flex items-center justify-center text-xl  hover:bg-white/50 text-dark`}>
                    <FaBell />
                </button>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <button className={` text-base font-semibold inline-flex items-center gap-2 uppercase text-dark`}>
                        <PiUserCircleFill className='text-3xl lg:text-3xl' />
                        <span className='hidden sm:block'>SHERU</span>
                    </button>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header