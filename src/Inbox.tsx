import React from 'react'
import Message from './Message'

const Inbox = () => {

    const getMessages = () => {
        return (
          <div>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
        )
      }
  return (
    <div className="row">
        {getMessages()}
    </div>
  )
}

export default Inbox