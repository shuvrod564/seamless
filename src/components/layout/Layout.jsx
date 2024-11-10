import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    const [collapseMenu, setCollapseMenu] = useState(false);
    const [resMenu, setResMenu] = useState(false); 




    // response menu state changing events
    useEffect(() => {
        const width = window.innerWidth;
        if (width < 1024) {
            setCollapseMenu(true);
        } else {
            setCollapseMenu(false);
        }
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setCollapseMenu(true);
            } else {
                setCollapseMenu(true);
            }
        })
        return () => {
            window.removeEventListener('resize', () => {
                const width = window.innerWidth;
                if (width < 1024) {
                    setCollapseMenu(true);
                } else {
                    setCollapseMenu(true);
                }
            })
        }
    }, []);


    return (
        <main className={`${collapseMenu ? 'lg:pl-[100px]' : 'lg:pl-[312px]'} transition-all duration-300`}>
            <SideMenu  resMenu={resMenu} setResMenu={setResMenu} collapseMenu={collapseMenu} setCollapseMenu={setCollapseMenu} />
            <div className="content">
                <Header  resMenu={resMenu} setResMenu={setResMenu} />
                <Outlet />
            </div>
        </main>
    )
}

export default Layout