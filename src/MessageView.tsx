import React from 'react'
import {useNavigate} from 'react-router-dom'
import './MessageView.css'
const MessageView = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  const handleDelete = () => {
    console.log('deleted')
  }
  return (
    <div id='message-view-container' className="row">
      <div className="col-12 d-flex justify-content-between">
        <button className='back-button' onClick={handleClick}>Back</button>
        <button className='delete-button' onClick={handleDelete}>Delete</button>
      </div>
      <div className="col-12">
        <p id='message-view-to'>To: Person McPerson</p>
      </div>
      <div className="col-12">
        <p id='message-view-from'>From: Mr. Pepper</p>
      </div>
      <div className="col-12">
        <p id='message-view-subject'>Subject: I Want You To Drink My Dr. Pepper</p>
      </div>
      <div className="col-12">
        <p id='message-view-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt facere cupiditate laudantium blanditiis. Ipsa explicabo provident praesentium quae sed quod eligendi quam in cum iste, ullam sequi quidem labore. Voluptatum.
        Cum fugiat illo dolorum minima laboriosam aspernatur tempora quas quibusdam, ratione exercitationem illum qui quidem, provident nobis eveniet non. Necessitatibus dolorum aliquam obcaecati totam iusto, ipsam quisquam vel atque iure!
        Laudantium sed optio quia, eligendi deleniti obcaecati esse sint qui ipsum nam veniam perferendis alias eum aspernatur corporis in ad amet. Quis eveniet cupiditate odit ex officia. Veritatis, dicta esse.</p>
      </div>
    </div>
  )
}

export default MessageView