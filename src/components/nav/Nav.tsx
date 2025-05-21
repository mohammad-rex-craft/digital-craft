'use client'
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/components/icon/MenuIcon";
import {useEffect, useState} from "react";
import CloseIcon from "@/components/icon/CloseIcon";


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const body = document.body;

        if (isOpen) {
            const scrollY = window.scrollY;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}px`;
            body.style.width = '100%';
            body.style.overflowY = 'hidden';
        } else {
            const scrollY = Math.abs(parseInt(body.style.top || '0'));
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            body.style.overflowY = '';
            window.scrollTo(0, scrollY);
        }

        return () => {
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            body.style.overflowY = '';
        };
    }, [isOpen]);

    useEffect(() => {
        document.documentElement.style.overflowX = 'hidden';
        return () => {
            document.documentElement.style.overflowX = '';
        };
    }, []);


    return (
        <>
            <header className={'w-full pt-12 flex justify-center items-end font-[BoldItalicArt] text-textColor'}>
                <nav className={'w-10/12 h-[50px] md:h-[60px] xl:h-[70px] rounded-full bg-darkGray '} style={{boxShadow: '0 0 10px 0 #ffffff40;'}}>
                    <div className={`w-full h-full flex justify-between items-center`}>
                        <div className={'flex h-full '}>
                            <div className={'pl-6 xl:pl-10 py-2 xl:py-4 h-full w-[45px] md:w-[50px] xl:w-[65px]'}>
                                <div className={'relative w-full h-full'}>
                                    <Image src={'/logo1.png'} alt={'...'} fill={true}/>
                                </div>
                            </div>
                            <div className={'h-full pl-6 flex  items-center text-[18px] md:text-[20px] xl:text-[25px] whitespace-nowrap'}>
                                <h1 >Digital Craft</h1>
                            </div>
                        </div>
                        <MenuIcon props={'block sm:hidden w-8 h-8 mr-4 cursor-pointer'} onClick={()=>setIsOpen(true)}/>
                        <div className={' gap-3 md:gap-6 xl:gap-10 h-full items-center text-[15px] md:text-[18px] xl:text-[20px]  hidden sm:flex'}>
                            <Link href={'#work'} className={'hover:text-lightBlue '}>Work</Link>
                            <Link href={'#about'} className={'hover:text-lightBlue '}>About</Link>
                            <Link href={'#services'}  className={'hover:text-lightBlue '}>Services</Link>
                            <Link href={'/auth/login'} className={'hover:text-lightBlue '}>Log in</Link>

                        </div>
                        <div className={'p-2 hidden sm:block text-[15px] md:text-[18px] xl:text-[20px]'}>
                            <div className={'border-2  border-lightBlue  hover:bg-lightBlue hover: rounded-full px-10 pt-1 pb-2'}><Link href={'/'}>Contact</Link></div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={`absolute top-0 left-0 w-full h-screen bg-darkGray z-50 duration-300 ${isOpen?'translate-x-0':'translate-x-[100%]'}`}>
                <div className={'w-full h-full flex flex-col p-10 gap-10 '}>
                    <CloseIcon props={' w-8 h-8 mr-4 cursor-pointer self-end stroke-white hover:stroke-darkBlue'} onClick={()=>setIsOpen(false)}/>
                    <div className={'flex flex-col gap-6 text-white items-center text-[15px] md:text-[18px] xl:text-[20px]'}>
                        <Link onClick={()=>setIsOpen(false)} href={'#work'} className={'hover:text-lightBlue '}>Work</Link>
                        <Link onClick={()=>setIsOpen(false)} href={'#about'} className={'hover:text-lightBlue '}>About</Link>
                        <Link onClick={()=>setIsOpen(false)} href={'#services'} className={'hover:text-lightBlue '}>Services</Link>
                        <Link onClick={()=>setIsOpen(false)} href={'/auth/login'} className={'hover:text-lightBlue '}>Log in</Link>
                        <div className={'p-2 text-[15px] md:text-[18px] xl:text-[20px]'}>
                            <div className={'border-2  border-lightBlue  hover:bg-lightBlue hover: rounded-full px-10 pt-1 pb-2'}><Link href={'/'}>Contact</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;