"use client"
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { useEffect, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Icons } from './Icons'
import { Switch } from './ui/switch'
import Image from 'next/image';



const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }

    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    useEffect(() => {
        const rootElement = document.documentElement;
        if (darkModeEnabled) {
            rootElement.classList.add('dark');
            rootElement.classList.remove('light');
        } else {
            rootElement.classList.add('light');
            rootElement.classList.remove('dark');
        }
    }, [darkModeEnabled]);
    const darkEnabled = (isChecked: boolean) => {
        setDarkModeEnabled(isChecked);
    };

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 lg:bg-pWhite/80 bg-pWhite backdrop-blur-lg transition-all dark:bg-banger-blue dark:lg:bg-banger-blue/70 dark:border-banger-blue">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-banger-blue">
                    <div className="flex items-center flex-row-reverse justify-center w-full">
                        <Link
                            href="/">
                            <Image
                                src='/logolong.svg'
                                alt='Logo Banger'
                                width={125}
                                height={30}
                                quality={100}
                                className="cursor-pointer mb-1"
                            />
                        </Link>
                    </div>
                    
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

export default Navbar;