import React, { useContext } from 'react'
import { MessageContext } from './MessageContext'

const Sent = () => {
    const {sentMessages} = useContext(MessageContext)
  return (
    <div>
        {sentMessages.map(message => <p>{message}</p>)}
    </div>
  )
}

export default Sent