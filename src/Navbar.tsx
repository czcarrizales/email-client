import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputContext } from './InputContext'

const Navbar = () => {
    const {inputValue, setInputValue} = useContext(InputContext)
    const [isInputVisible, setInputVisible] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen)
    }
    const handleSearchClick = () => {
        setInputVisible(!isInputVisible)
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const location = useLocation()
    const getLinkText = (pathname) => {
        switch (pathname) {
          case '/':
            return 'Inbox';
          case '/favorites':
            return 'Favorites';
            case '/sent':
                return 'Sent'
          case '/spam':
            return 'Spam';
          case '/trash':
            return 'Trash';
            default:
                if (pathname.startsWith('/message-view/')) {
                  // Extract the ID from the pathname (assuming the parameter is named "id")
                  return `Message View`;
                } else {
                  return 'Inbox';
                }
        }
      };
      // Get the link text based on the current pathname
      const linkText = getLinkText(location.pathname);

    return (
        <nav id='navbar' className="navbar sticky-top row navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavToggle}>
      <span className="navbar-toggler-icon"></span>
      
    </button>
    <Link id='current-page' className="navbar-brand d-lg-none" to='/'>{linkText}</Link>
    <a><FontAwesomeIcon id='search-icon' className='d-lg-none' icon={faSearch} size="xl" onClick={handleSearchClick}/></a>
    {isInputVisible && (<div id='search-form' className="col-12">
        
        <input type="text" className='col-12 d-lg-none' placeholder='Search' onChange={handleChange} value={inputValue} />
    </div>)}
    <div id='search-form' className="col-12 d-none d-lg-block">
        
        <input type="text" className='col-6 offset-6' placeholder='Search' onChange={handleChange} value={inputValue} />
    </div>
    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} d-lg-none`} id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/'>Inbox</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/favorites'>Favorites</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/sent'>Sent</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/spam'>Spam</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/trash'>Trash</Link>
        </li>
      </ul>
    </div>
            </div>
        </nav>

        // <nav id='navbar' className="navbar row navbar-expand-lg">
        //     <div className="col">
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarContent">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Inbox</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Favorites</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Spam</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Trash</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="col text-center">
        //         <Link to={'/'} id='current-page'><h1>Inbox</h1></Link>
        //     </div>
        //     <div className="col text-end">
        //     <FontAwesomeIcon icon={faSearch} size="xl"/>
        //     </div>

        // </nav>
    )
}

export default Navbar