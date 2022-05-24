import { createContext, ReactNode, useState } from 'react';

import { ContextType, SelectedOptions } from './types';

const initialValue = {
  options: {
    background: '',
    clothes: '',
    face: '',
    hair: '',
  },
  setOptions: () => {},
};

export const ctx = createContext<ContextType>(initialValue);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [options, setOptions] = useState<SelectedOptions>({
    background: 'default',
    clothes: 'default',
    face: 'default',
    hair: 'default',
  });

  return (
    <ctx.Provider
      value={{
        options,
        setOptions,
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default ContextProvider;
