"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'


function Nav() {
    const pathname = usePathname(); 

    const { theme, setTheme } = useTheme()

    

    return (



        <div className='max-w-6xl mx-auto px-4 py-4'>
            <div className="sm:hidden">
            <label htmlFor="Tab" className="sr-only">Tab</label>
            <Dropdown className="w-full rounded-md border-indigo-700">
                <DropdownTrigger>
                    <Button variant="bordered">Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem><Link href="/"> Home </Link></DropdownItem>
                    <DropdownItem><Link href="/projects"> Projects </Link></DropdownItem>
                    <DropdownItem><Link href="/aboutme"> About Me </Link></DropdownItem>
                    <DropdownItem><Link href="/contact"> Contact </Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200 flex justify-between items-center" >
                    <div className="flex justify-start gap-6 m-5">
                        <button
                            className="text-amber-500 dark:text-sky-200 text-3xl "
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                            {theme === "light" ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                    <nav className="-mb-px flex justify-end gap-6 m-9" aria-label="Tabs">
                        
                        <Link href="/" className={pathname == "/" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-400 dark:hover:border-indigo-400"}> Home </Link>
                        <Link href="/projects" className={pathname == "/projects" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-400 dark:hover:border-indigo-400"}> Projects </Link>
                        <Link href="/aboutme" className={pathname == "/aboutme" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-400 dark:hover:border-indigo-400"}> About Me </Link>
                        <Link href="/sterndev" className={pathname == "/sterndev" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-400 dark:hover:border-indigo-400"} aria-current="page"> SterNdev </Link>
                    </nav>
                    
                </div>
            </div>
        </div>

    )
  }
  
  export default Nav


