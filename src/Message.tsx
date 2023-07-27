import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Message.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Message = () => {
  const navigate = useNavigate()
  const [isFavorited, setIsFavorited] = useState(false)
  const [color, setColor] = useState('#44404F')
  const viewMessage = () => {
    navigate('/message-view')
  }
  const goToProfile = () => {
    navigate('/profile')
  }
  const handleFavorite = () => {
    if (isFavorited === false) {
      setIsFavorited(true)
      setColor('yellow')
    } else {
      setIsFavorited(false)
      setColor('#44404F')
    }
  }
  return (
    <div id="message-container" className="row">
      <div id='message-profile' className="col-3 d-flex align-items-center justify-content-center" onClick={goToProfile}>
        <p className='profile-picture'></p>
      </div>
      <div className="col-6" onClick={viewMessage}>
        <div className="row">
          <div id='message-name' className="col-12">Chazz Carrizales</div>
          <div id='message-title' className="col-12">Yo, Let's Hang Out!</div>
          <div id='message-text' className="col-12">This is some text that says I...</div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-end">
        <div className="row">
          <div className="col-12 text-end">March 17</div>
          <div className="col-12 text-end"><FontAwesomeIcon id='star' icon={faStar} onClick={handleFavorite} style={{color}} /></div>
        </div>
      </div>
    </div>
  )
}

export default Message