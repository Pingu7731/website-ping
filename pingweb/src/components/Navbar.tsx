import { useEffect, useState } from "react"
import { navLinks } from "../constants"
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Go back to top
                </a>


                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, names }) => (

                            <li key={names} className="group">
                                <a href={link}>
                                    <span> {names}</span>
                                    <span className="underline" />
                                </a>

                            </li>
                        ))}

                    </ul>
                </nav>

                <a href="#test" className=" contact-btn group">
                    <div className="inner">
                        <span>Idk bro</span>
                    </div>

                </a>

            </div>

        </header>

    )
}
export default NavBar