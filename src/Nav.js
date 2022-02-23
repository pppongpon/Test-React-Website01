import React from "react";
import './App.css'
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <ul className="nav-links">
                <Link to={'/CSSTest'}>
                    <li>01 - CSS Test.</li>
                </Link>
                <Link to={'/booking'}>
                    <li>03 - Venue Booking System</li>
                </Link>
            </ul>
        </nav>
    );
}
export default Nav;