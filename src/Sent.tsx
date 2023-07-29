import { useContext } from 'react'
import { MessageContext } from './MessageContext'

const Sent = () => {
    const {sentMessages} = useContext(MessageContext)
  return (
    <div>
        {sentMessages.map((message: any) => <p>{message}</p>)}
    </div>
  )
}

export default Sent