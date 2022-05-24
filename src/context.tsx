import { createContext, ReactNode, useState } from 'react';

import { ContextType, SelectedOptions } from './types';

const initialValue = {
  selectedOptions: {
    background: '',
    clothes: '',
    face: '',
    hair: '',
  },
  setSelectedOptions: () => {},
};

export const ctx = createContext<ContextType>(initialValue);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    background: 'default',
    clothes: 'default',
    face: 'default',
    hair: 'default',
  });

  return (
    <ctx.Provider
      value={{
        selectedOptions,
        setSelectedOptions,
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default ContextProvider;
