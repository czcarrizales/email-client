// MessageContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MessageContext = createContext([]);

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
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
