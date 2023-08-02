// InputContext.js
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface InputContextType {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const InputContext = createContext<InputContextType>({
  inputValue: '',
  setInputValue: () => {}
});

interface InputProviderProps {
  children: ReactNode;
}

const InputProvider = ({ children }: InputProviderProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };
