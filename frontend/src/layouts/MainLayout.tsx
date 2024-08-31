import React from 'react';
import TopNav from '../components/TopNav';
import { useLocation } from 'react-router-dom';

function MainLayout({children} : {children: React.ReactNode}) {
    return (
        <div>
            <header>
                <TopNav />
            </header>
            {/* <div className={[
                useLocation().pathname === '/' ? 'max-w-[1240px]' : "",
                "flex justify-between mx-auto w-full lg:px-2.5 px-0"
            ].join(" ")}>
            </div> */}
            {children}
        </div>
    )
}
export default MainLayout;