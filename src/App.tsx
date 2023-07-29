import { BrowserRouter, Routes, Route, Link, useLocation, useParams, matchPath, useMatch } from 'react-router-dom'
import './App.css'
import Message from './Message'
import Navbar from './Navbar'
import MessageView from './MessageView'
import Profile from './Profile'
import Inbox from './Inbox'
import CreateMessage from './CreateMessage'
import { MessageProvider } from './MessageContext'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputProvider } from './InputContext'
import Favorites from './Favorites'
import Spam from './Spam'
import Trash from './Trash'
import Sent from './Sent'
import CustomButton from './CustomButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar'

function App() {

  const match = useMatch('/message-view/:id');
  const id = match?.params?.id || null

  return (

    <div className='container'>
      <Navbar />
      <div className="row">
        <ToastContainer
          position="bottom-left" // Position of the notifications (top-right, top-left, bottom-right, bottom-left)
          autoClose={2000} // Auto close the notifications after the specified time in milliseconds
        />        <div className="d-none d-lg-block col-lg-2 p-0">
          <Sidebar />
        </div><div className="col-lg-10">
          <Routes>
            <Route path='/' element={<Inbox />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/sent' element={<Sent />} />
            <Route path='/spam' element={<Spam />} />
            <Route path='/trash' element={<Trash />} />
            <Route path='/message-view/:id' element={<MessageView />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/create-message/:id' element={<CreateMessage />} />
            <Route path='/create-message' element={<CreateMessage />} />
          </Routes>
        </div>
      </div>



      <CustomButton id={id} />
    </div>

  )
}

export default App
