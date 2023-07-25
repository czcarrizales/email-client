import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar' className="navbar row ">
            <div className="col">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col text-center">
                Inbox
            </div>
            <div className="col text-end">
                Search
            </div>
        </nav>
    )
}

export default Navbar