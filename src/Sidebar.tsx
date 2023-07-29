import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('/');

    const location = useLocation();
  // Function to check if the current pathname is the '/create-message' route
  const isMessageViewRoute = () => {
    return /^\/message-view\/[a-f0-9-]+$/.test(location.pathname);
  };
  const isCreateMessageRoute = () => {
    return location.pathname.startsWith('/create-message');
  }

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
    return (
        <div id='sidebar' className="sidebar">
            <Link id='sidebar-compose-message' className='text-center' onClick={() => handleLinkClick(null)} to='/create-message'>Compose</Link>
          <ul className="nav flex-column"><Link to="/" className="sidebar-link" >
            <li className={(activeLink === '/' ? 'active' : '') + ' sidebar-item'} onClick={() => handleLinkClick('/')}>
              Inbox
            </li></Link><Link to="/favorites" className="sidebar-link">
            <li className={(activeLink === '/favorites' ? 'active' : '') + ' sidebar-item'} onClick={() => handleLinkClick('/favorites')}>
              Favorites
            </li></Link>
            <Link to="/sent" className="sidebar-link">
            <li className={(activeLink === '/sent' ? 'active' : '') + ' sidebar-item'} onClick={() => handleLinkClick('/sent')}>
              Sent
            </li>
            </Link><Link to="/spam" className="sidebar-link">
            <li className={(activeLink === '/spam' ? 'active' : '') + ' sidebar-item'} onClick={() => handleLinkClick('/spam')}>
              Spam
            </li></Link><Link to="/trash" className="sidebar-link">
            <li className={(activeLink === '/trash' ? 'active' : '') + ' sidebar-item'} onClick={() => handleLinkClick('/trash')}>
              Trash
            </li></Link>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      );
}

export default Sidebar