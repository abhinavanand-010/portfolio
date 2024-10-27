"use client";

import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";



const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className='flex items-center justify-center'>
            <CiMenuFries className='text-[32px] text-accent-default' />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-32 text-2xl text-center'>
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Abhinav <span className='text-accent-default'>Anand</span>
                    </h1>
                </Link>
            </div>
            <nav className='flex flex-col items-center justify-center gap-8'>
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-default border-b-2 border-accent-default"}   text-xl capitalize hover:text-accent-default transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
}

export default MobileNav;