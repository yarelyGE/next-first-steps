import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    { path: '/general/about', text: 'About' },
    { path: '/general/pricing', text: 'Pricing' },
    { path: '/general/contact', text: 'Contact' }
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className="flez items-center">
                <HomeIcon className="mr-2" /><span>Home</span>
            </Link>
            <div className="flex flex-1"></div>

            {
                navItems.map(navItem => (
                    <ActiveLink key={ navItem.path } {...navItem}/>
                ))
            }
            {

            /* <Link className="mr-2" href="/general/about">About</Link>
            <Link className="mr-2" href="/general/pricing">Pricing</Link>
            <Link className="mr-2" href="/general/contact">Contact</Link> */}
        </nav>
    )
}