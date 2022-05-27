import { createContext, ReactNode, useEffect, useState } from 'react';

import { ContextType, Avatar } from './types';

const initialValue = {
  avatar: {
    background: '',
    clothes: '',
    face: '',
    hair: '',
  },
  setAvatar: () => {},
};

export const ctx = createContext<ContextType>(initialValue);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [avatar, setAvatar] = useState<Avatar>({
    background: 'default',
    clothes: 'default',
    face: 'default',
    hair: 'default',
  });

  useEffect(() => {
    const savedAvatar = sessionStorage.getItem('avatar');
    if (savedAvatar) setAvatar(JSON.parse(savedAvatar));
  }, []);

  return (
    <ctx.Provider
      value={{
        avatar,
        setAvatar,
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default ContextProvider;
