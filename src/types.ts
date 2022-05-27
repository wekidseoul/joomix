import { Dispatch, SetStateAction } from 'react';

export type AvatarPart = 'background' | 'clothes' | 'face' | 'hair';

export interface Option {
  key: string;
  name: string;
}

export interface Avatar {
  background: string;
  clothes: string;
  face: string;
  hair: string;
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
