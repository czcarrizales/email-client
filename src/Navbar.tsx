import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isInputVisible, setInputVisible] = useState(false)
    const handleSearchClick = () => {
        console.log('search clicked')
        setInputVisible(!isInputVisible)
    }
    return (
        <nav id='navbar' className="navbar sticky-top row navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
    </button>
    <Link id='current-page' className="navbar-brand" to='/'>Inbox</Link>
    <a><FontAwesomeIcon id='search-icon' icon={faSearch} size="xl" onClick={handleSearchClick}/></a>
    {isInputVisible && (<div id='search-form' className="col-12">
        <input type="text" className='col-9' placeholder='Search' />
        <input type="submit" className='col-3' value='Search'/>
    </div>)}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Inbox</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Favorites</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Spam</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trash</a>
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