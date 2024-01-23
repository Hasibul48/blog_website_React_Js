import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css';
function Navbar() {


    return (
        <>
            <nav style={{ zIndex: '1000' }} className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link style={{ marginLeft: '40px' }} className="navbar-brand" href="/">Personal Blog</Link>
                        <ul className={`${style.marginLeft} ${style.bold} navbar-nav`}>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/politics">Politics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tech">Tech</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/travel">Travel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sports">Sports</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <br />
        </>
    )
}

export default Navbar