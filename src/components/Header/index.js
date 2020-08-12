import React from "react";
import "./style.css";

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">Contact Me</a>
                <a href="#">About Me</a>
            </nav>
            <div>
                social Media links
            </div>
        </header>
    );
}

export default Header;