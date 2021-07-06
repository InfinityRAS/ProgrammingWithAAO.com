import React from 'react';
import { Link } from "react-router-dom";

export const Header = ({loader}) => {

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
                    <img src="../Img/logo_circle.ico" alt="Logo" id="logo" />
                    <div className="hide-content">
                        <li id="list_item-1" className="list_items">
                            <Link id="list_link-1" className="list_links" to="/" onClick={loader}>Home</Link>
                        </li>
                        <li id="list_item-2" className="list_items">
                            <Link id="list_link-1" className="list_links" to="/courses" onClick={loader}>Browse Video Courses</Link>
                        </li>
                        <li id="list_item-3" className="list_items">
                            <Link id="list_link-1" className="list_links" to="/enroll" onClick={loader}>Enroll Now!</Link>
                        </li>
                        <li id="list_item-4" className="list_items">
                            <Link id="list_link-1" className="list_links" to="/contact" onClick={loader}>Contact Us</Link>
                        </li>
                        <div id="search-box_div">
                            <li id="searchbox">
                                <form action="" onSubmit={(e) => {e.preventDefault(); loader()}}>
                                    <input type="search" id="search" placeholder="Type here to search" />
                                </form>
                            </li>
                        </div>
                    </div>
                    <img src="../SVG/hamburger.svg" alt="Hamburger" id="hamburger" className="hamburger" onClick={ResponsiveNav} />
                </ul>
            </nav>
        </header>
    )
}
