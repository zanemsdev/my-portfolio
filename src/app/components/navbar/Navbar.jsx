"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

function Nav() {
    const pathname = usePathname(); 


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
                    <DropdownItem><Link href="/contact"> Contact </Link></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                <nav className="-mb-px flex justify-end gap-6 m-5" aria-label="Tabs">
                    
                    <Link href="/" className={pathname == "/" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700"}> Home </Link>
                    <Link href="/projects" className={pathname == "/projects" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700"}> Projects </Link>
                    <Link href="/sterndev" className={pathname == "/sterndev" ? "hidden" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-700 hover:text-indigo-700"} aria-current="page"> SterNdev </Link>
                </nav>
                </div>
            </div>
        </div>

    )
  }
  
  export default Nav
  
  
  