import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Profile.css'
import { MessageContext } from './MessageContext'

const Profile = () => {
    const {id} = useParams()
    const {messages} = useContext(MessageContext)
    const user = messages.find((message) => message.login.uuid === id)
    console.log(user)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
      }
  return (
    <div className="row">
        <div className="col">
            <button onClick={handleClick} className='back-button'>Back</button>
        </div>
        <div id='profile-details-container'>
        <div className="col-6 offset-3">
            <img src={user.picture.large} id='profile-picture'></img>
        </div>
        <div className="col-6 offset-3">
            <p className='profile-label'>Username</p>
            <p className='profile-detail'>{user.name.first} {user.name.last}</p>
        </div>
        <div className="col-6 offset-3">
            <p className='profile-label'>Email</p>
            <p className='profile-detail'>{user.email}</p>
        </div>
        <div className="col-6 offset-3">
            <p className='profile-label'>Phone</p>
            <p className='profile-detail'>{user.phone}</p>
        </div>
        </div>
        
    </div>
  )
}

export default Profile