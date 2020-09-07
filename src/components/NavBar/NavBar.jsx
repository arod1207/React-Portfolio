import React from 'react';

function NavBar() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects">
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
