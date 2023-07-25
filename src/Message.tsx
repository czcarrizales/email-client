import React from 'react'
import './Message.css'

const Message = () => {
  return (
    <div id="message-container" className="row">
      <div id='message-profile' className="col-3 d-flex align-items-center justify-content-center">Profile Picture</div>
      <div className="col-6">
        <div className="row">
          <div className="col-12">Chazz Carrizales</div>
          <div className="col-12">Yo, Let's Hang Out!</div>
          <div className="col-12">This is some text that says I...</div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-end">
        <div className="row">
          <div className="col-12 text-end">March 17</div>
          <div className="col-12 text-end">Star</div>
        </div>
      </div>
    </div>
  )
}

export default Message