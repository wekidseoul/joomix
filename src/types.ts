import { Dispatch, SetStateAction } from 'react';

export type AvatarPart = 'head' | 'body';

export interface Option {
  key: string;
  name: string;
}

export interface Avatar {
  head: string;
  body: string;
}

export interface ContextType {
  avatar: Avatar;
  setAvatar: Dispatch<SetStateAction<Avatar>>;
}

export interface Comment {
  name: string;
  id?: string;
  nickname: string;
  avatar: Avatar;
  message: string;
  regDate?: string;
}
