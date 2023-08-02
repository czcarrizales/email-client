import { useContext, useEffect, useState } from 'react'
import { InputContext } from './InputContext'
import Message from './Message'
import { MessageContext } from './MessageContext'

const Trash = () => {
    const {messages} = useContext(MessageContext)
    const trashMessages = messages.filter((message: any) => message.trash)
    const {inputValue} = useContext(InputContext)
    const [filteredMessages, setFilteredMessages] = useState([])

    useEffect(() => {
        const filtered = trashMessages.filter((message: any) => {
            const first = message.name.first
            return first.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredMessages(filtered)
        console.log(filteredMessages, inputValue)
    }, [messages, inputValue])


      const displayMessages = () => {
        return (filteredMessages as any[]).map((message) => (<Message firstName={message.name.first} lastName={message.name.last} picture={message.picture.medium} id={message.login.uuid} />))
      }
  return (
    <div>
        {displayMessages()}
    </div>
  )
}

export default Trash