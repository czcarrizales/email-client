// MessageContext.js
import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface MessageData {
  [key: string]: any;
}

const MessageContext = createContext<MessageData>([]);

interface MessageProviderProps {
  children: ReactNode;
}



// interface MessageContextProps {
//   messages: MessageData[];
//   setMessages: Dispatch<SetStateAction<MessageData[]>>;
//   notification: boolean;
//   setNotification: Dispatch<SetStateAction<boolean>>;
//   handleNotification: () => void;
//   loadingMessages: boolean;
//   setLoadingMessages: Dispatch<SetStateAction<boolean>>;
//   sentMessages: MessageData[];
//   setSentMessages: Dispatch<SetStateAction<MessageData[]>>;
// }

const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [sentMessages, setSentMessages] = useState([])
  const [notification, setNotification] = useState(false)
  const [loadingMessages, setLoadingMessages] = useState(true)

  useEffect(() => {
    const fetchingAllUsers = async () => {
            for (let i = 0; i < 10; i++) {
               await fetchRandomUser()
            }
            setLoadingMessages(false)
    }
    fetchingAllUsers()
}, [])

const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const userData = response.data.results[0]
      const newUserData = {...userData, favorited: false, spam: false, trash: false}
      setMessages((prevMessages) => [...prevMessages, newUserData]);
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  const handleNotification = () => {
    setNotification(true)
    console.log('did something to message!')
  }

  return (
    <MessageContext.Provider value={{messages, setMessages, notification, setNotification, handleNotification, loadingMessages, setLoadingMessages, sentMessages, setSentMessages}}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
