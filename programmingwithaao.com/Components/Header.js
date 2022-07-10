import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ loader }) => {
    function ResponsiveNav() {
        const header = document.querySelector('.header');
        const hideContent = document.querySelector(".hide-content");

        hideContent.classList.toggle('show-nav-resp');
        header.classList.toggle("h-header-resp")
        // console.log(hamburger, header, hideContent);
    }

    return (
        <header className="header">
            <nav id="navbar">
                <ul id="nav_list">
                    <Image src="/Img/logo_circle.ico" width={45} height={45} alt="Logo" id="logo" />
                    <div className="hide-content">
                        <Link id="list_item-1" className="list_items" href="/" onClick={loader}>
                            <a id="list_link-1" className="list_links" >Home</a>
                        </Link>
                        <Link id="list_item-2" className="list_items" href="/courses" onClick={loader}>
                            <a id="list_link-2" className="list_links" >Browse Video Courses</a>
                        </Link>
                        <Link id="list_item-3" className="list_items" href="/enroll" onClick={loader}>
                            <a id="list_link-3" className="list_links" >Enroll Now!</a>
                        </Link>
                        <Link id="list_item-4" className="list_items" href="/contact" onClick={loader}>
                            <a id="list_link-4" className="list_links" >Contact Us</a>
                        </Link>
                        <Link id="list_item-5" className="list_items" href="/books" onClick={loader}>
                            <a id="list_link-5" className="list_links" >Your Books</a>
                        </Link>
                    </div>
                    <Image src="/SVG/hamburger.svg" width={45} height={45} alt="Hamburger" id="hamburger" className="hamburger" onClick={ResponsiveNav} />
                </ul>
            </nav>
        </header>
    );
}

export default Header