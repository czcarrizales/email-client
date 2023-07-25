import React from 'react'
import './Message.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Message = () => {
  return (
    <div id="message-container" className="row">
      <div id='message-profile' className="col-3 d-flex align-items-center justify-content-center">Profile Picture</div>
      <div className="col-6">
        <div className="row">
          <div id='message-name' className="col-12">Chazz Carrizales</div>
          <div id='message-title' className="col-12">Yo, Let's Hang Out!</div>
          <div id='message-text' className="col-12">This is some text that says I...</div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-end">
        <div className="row">
          <div className="col-12 text-end">March 17</div>
          <div className="col-12 text-end"><FontAwesomeIcon id='star' icon={faStar} /></div>
        </div>
      </div>
    </div>
  )
}

export default Message