import React, { useContext, useEffect, useState } from 'react'
import { InputContext } from './InputContext'
import Message from './Message'
import { MessageContext } from './MessageContext'

const Spam = () => {
    const {messages} = useContext(MessageContext)
    const spamMessages = messages.filter((message) => message.spam)
    const {inputValue} = useContext(InputContext)
    const [filteredMessages, setFilteredMessages] = useState([])

    useEffect(() => {
        const filtered = spamMessages.filter((message) => {
            const first = message.name.first
            return first.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredMessages(filtered)
        console.log(filteredMessages, inputValue)
    }, [messages, inputValue])


      const displayMessages = () => {
        return filteredMessages.map((message) => (<Message firstName={message.name.first} lastName={message.name.last} picture={message.picture.medium} id={message.login.uuid} />))
      }
  return (
    <div>
        {displayMessages()}
    </div>
  )
}

export default Spam