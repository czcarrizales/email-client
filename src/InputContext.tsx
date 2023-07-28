// InputContext.js
import { createContext, useState } from 'react';

const InputContext = createContext('');

const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };
