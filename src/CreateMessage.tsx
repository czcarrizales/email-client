import React, { useContext } from 'react'
import './CreateMessage.css'
import { MessageContext } from './MessageContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreateMessage = () => {
    const navigate = useNavigate()
    const {messages, sentMessages, setSentMessages} = useContext(MessageContext)
    const {id} = useParams()
    const user = messages.find((message) => message.login.uuid === id)
    const inputValue = user ? user.email : null
    const onSubmit = (e) => {
        e.preventDefault()
        toast.success('Email sent!', {
            position: "bottom-left",
            autoClose: 3000,
            theme: "dark",
          })
          setSentMessages([...sentMessages, 'a sent email'])
        navigate('/')
        console.log('submit')
    }
  return (
    <div className="row">
        <div className="col">
        <form action="">
            <div id='create-message-to'>
            <input className='form-control create-message-input' type="text" placeholder='To:' value={inputValue || ''} />
            </div>
            <div id='create-message-subject'>
            <input className='form-control create-message-input' type="text" placeholder='Subject Title' />
            </div>
            <div id='create-message-text'>
            <textarea className='form-control create-message-input' name="" id="" cols={30} rows={10}></textarea>
            </div>
            
            <div id='create-message-submit'>
            <input className='btn btn-primary btn-block create-message-input' type="submit" onClick={onSubmit} />
            </div>
            
        </form>
        </div>
        
    </div>
  )
}

export default CreateMessage