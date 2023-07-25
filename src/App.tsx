import './App.css'
import Message from './Message'
import Navbar from './Navbar'

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
    <div className='container'>
      <Navbar />
      {getMessages()}
    </div>
  )
}

export default App
