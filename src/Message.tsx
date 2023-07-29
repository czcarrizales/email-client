import React, { useContext, useEffect } from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import 'react-contexify/ReactContexify.css';
import {
  Menu,
  Item,
  useContextMenu,
  RightSlot,
  Separator,
} from 'react-contexify';
import './Message.css'
import { MessageContext } from './MessageContext'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify'

const Message = (props) => {
  const { show } = useContextMenu({ id: 'demo' });
  const {messages, setMessages} = useContext(MessageContext)
  const user = messages.find((message) => message.login.uuid === props.id)
  const navigate = useNavigate()
  const [isFavorited, setIsFavorited] = useState(user.favorited)
  const viewMessage = () => {
    navigate(`/message-view/${props.id}`)
  }
  const goToProfile = () => {
    navigate(`/profile/${props.id}`)
  }
  const handleFavorite = () => {
    if (user.favorited) {
      const updatedMessages = messages.map((message) => {
        return message === user ? {...message, favorited: false} : message
      })
      setMessages(updatedMessages)
      setIsFavorited(false)
      toast.info('Removed from Favorites', {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark",
      })
    } else {
      const updatedMessages = messages.map((message) => {
        return message === user ? {...message, favorited: true} : message
      })
      setMessages(updatedMessages)
      setIsFavorited(true)
      toast.info('Sent to Favorites', {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark",
      })
    }
  }
  
  return (
    <div id="message-container" className="row" onContextMenu={(e) => show({ event: e })} key={props.key}>
      <div id='message-profile' className="col-3 col-lg-2 d-flex align-items-center justify-content-center" onClick={goToProfile}>
        <img className='profile-picture' src={props.picture} alt="" />
      </div>
      <div className="col-6 col-lg-8" onClick={viewMessage}>
        <div className="row">
          <div id='message-name' className="col-12 col-lg-4">{props.firstName || <Skeleton />} {props.lastName}</div>
          <div id='message-title' className="col-12 col-lg-4">Yo, Let's Hang Out!</div>
          <div id='message-text' className="col-12 col-lg-4">This is some text that says I...</div>
        </div>
      </div>
      <div className="col-3 col-lg-2 d-flex align-items-center justify-content-end">
        <div className="row">
          <div className="col-12 text-end">March 17</div>
          <div className="col-12 text-end"><FontAwesomeIcon id='star' icon={faStar} onClick={handleFavorite} style={{color: isFavorited ? 'yellow' : 'gray'}} /></div>
        </div>
      </div>
      <Menu id="demo" theme='dark'>
        <Item id="1"  >
          Open
        </Item>
        <Separator />
        <Item id="2">
          Delete
        </Item>
      </Menu>
    </div>
  )
}

export default Message