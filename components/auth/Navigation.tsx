"use client"

import { Button } from "@/components/ui/button"
import { User } from "@prisma/client"
import UserNavigation from "./UserNavigation"
import Link from "next/link"
import Nav from "./Nav"
import { useState, useEffect } from "react"

type NavigationProps = {
    user: User | null
}

const Navigation = ({user}: NavigationProps) =>{
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // ある程度スクロールしたらヘッダーを固定
            if (scrollY > 500) {
                setIsHeaderFixed(true);

                
            } 
            else {
                setIsHeaderFixed(false);
            }
        };

        // スクロールイベントをリッスン
        window.addEventListener('scroll', handleScroll);

        // コンポーネントがアンマウントされたときにイベントリスナーを削除
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // この useEffect は初回のみ実行
    return (
        <header className={`shadow-lg shadow-gray-100 ${isHeaderFixed ? 'fixed top-0 w-full z-50 bg-white' : ''}`}>
            <Nav />
      <div className="md:container md:flex md:justify-end md:items-center md:px-2   hidden ">
        
       {user ? (
        <UserNavigation user={user} />
       ) : (
       <></>
       )}
        <div className='  box-border flex justify-end p-3 mt-3 gap-5 text-stone-600 relative'>
        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={`/`}>Home</Link>

        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={'/profile'}>Profile</Link>
        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={'/#news'}>News</Link>

        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={'/discography'}>Discography</Link>
        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={'/movies'}>Movies</Link>
        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={'/schedule'}>Schedule</Link>
        <Link className=' border-b-2 border-white hover:border-b-2 hover:border-rose-400' href={'/live'}>Live</Link>
    </div>

       </div>
        </header>
    )
}

export default Navigation