import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
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
            <p id='profile-picture'></p>
        </div>
        <div className="col-6 offset-3">
            <p className='profile-label'>Username</p>
            <p className='profile-detail'>Person McPerson</p>
        </div>
        <div className="col-6 offset-3">
            <p className='profile-label'>Email</p>
            <p className='profile-detail'>example@email.com</p>
        </div>
        <div className="col-6 offset-3">
            <p className='profile-label'>Phone</p>
            <p className='profile-detail'>555-555-5555</p>
        </div>
        </div>
        
    </div>
  )
}

export default Profile