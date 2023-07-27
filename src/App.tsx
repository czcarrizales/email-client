import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Message from './Message'
import Navbar from './Navbar'
import MessageView from './MessageView'
import Profile from './Profile'
import Inbox from './Inbox'
import CreateMessage from './CreateMessage'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  const getMessages = () => {
    return (
      <>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </>
    )
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inbox />} />
          <Route path='/message-view' element={<MessageView />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-message' element={<CreateMessage />} />
        </Routes>
        <Link id="btn-fixed" to='/create-message'><FontAwesomeIcon icon={faMessage} size='2x' /></Link>
      </div>
    </BrowserRouter>

  )
}

export default App
