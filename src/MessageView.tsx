import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import './MessageView.css'
import { MessageContext } from './MessageContext'
import { toast } from 'react-toastify'
import { loremIpsum } from 'lorem-ipsum'
const MessageView = () => {
  const navigate = useNavigate()
  const {messages, setMessages} = useContext(MessageContext)
  const {id} = useParams()
  const [user, setUser] = useState<any>(null)
  const [messageText, setMessageText] = useState('')
  const [subjectTitle, setSubjectTitle] = useState('')
  console.log(user)
  useEffect(() => {
    console.log('checking user')
    const checkUser = async () => {
      const foundUser = await messages.find((message: any) => message.login.uuid === id)
      if (foundUser == undefined) {
        console.log('user is undefined')
        navigate('/')
      } else {
        console.log('user exists')
        setUser(foundUser)
      }
    }
    checkUser()
    generateLoremIpsumText()
    generateLoremIpsumSubject()
  }, [])

  const generateLoremIpsumText = () => {
    const loremText = loremIpsum({
      count: 5,
      units: 'paragraphs'
    })
    setMessageText(loremText)
  }

  const generateLoremIpsumSubject = () => {
    const loremSubject = loremIpsum({
      count: 2,
      units: 'words'
    })
    setSubjectTitle(loremSubject)
  }
  
  const handleClick = () => {
    navigate('/')
  }
  const handleDelete = () => {
    if (!user?.trash) {
      const updatedMessages = messages.map((message: any) => {
        return message === user ? {...message, trash: true} : message
      })
      setMessages(updatedMessages)
      toast.error('Sent to Trash', {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark",
      })
    } else {
      const updatedMessages = messages.map((message: any) => {
        return message === user ? {...message, trash: false} : message
      })
      setMessages(updatedMessages)
      toast.error('Sent to Inbox', {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark",
      })
    }
    navigate('/')
    
  }
  const handleSpam = () => {
    if (!user?.spam) {
      const updatedMessages = messages.map((message: any) => {
        return message === user ? {...message, spam: true} : message
      })
      setMessages(updatedMessages)
      navigate('/')
    }
    toast.warn('Sent to Spam', {
      position: "bottom-left",
      autoClose: 3000,
      theme: "dark",
    })
  }
  return (
    <div id='message-view-container' className="row">
      <div className="col-12 d-flex justify-content-between">
        <button className='back-button' onClick={handleClick}>Back</button>
        <button className='spam-button' onClick={handleSpam}>Spam</button>
        <button className='delete-button' onClick={handleDelete}>{user?.trash ? 'Undo Delete' : 'Delete'}</button>
      </div>
      <div className="col-12">
        <p id='message-view-to'>To: You, the User!</p>
      </div>
      <div className="col-12">
        <p id='message-view-from'>From: {user?.name.first} {user?.name.last}</p>
      </div>
      <div className="col-12">
        <p id='message-view-subject'>Subject: {subjectTitle}</p>
      </div>
      <div className="col-12">
        <p id='message-view-text'>{messageText}</p>
      </div>
    </div>
  )
}

export default MessageView