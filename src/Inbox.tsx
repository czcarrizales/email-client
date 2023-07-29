import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import axios from 'axios'
import { MessageContext } from './MessageContext'
import { InputContext } from './InputContext'
import CardSkeleton from './CardSkeleton'

const Inbox = () => {

    const {messages, notification, setNotification, loadingMessages, setLoadingMessages} = useContext(MessageContext)
    const {inputValue} = useContext(InputContext)
    const [filteredMessages, setFilteredMessages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const filtered = messages.filter((message) => {
            const first = message.name.first
            return first.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredMessages(filtered)
    }, [messages, inputValue])

    useEffect(() => {
        console.log('notification changed!')
        if (notification) {
            setTimeout(() => {
                setNotification(false)
                console.log('notification is now false')
            }, 2000)
        }
        
    }, [notification])


      const displayMessages = () => {
        return filteredMessages.map((message) => {
            if(message.trash || message.spam) {
                
            } else {
                return (<Message firstName={message.name.first} lastName={message.name.last} picture={message.picture.medium} id={message.login.uuid} />)
            }
        } )
      }
  return (
    <div className='row'>
        <div className="col-12">
        {loadingMessages && <CardSkeleton cards={10} />}
        {!loadingMessages && displayMessages()}
        </div>
        
    </div>
  )
}

export default Inbox