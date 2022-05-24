import { Dispatch, SetStateAction } from 'react';

export type AvatarPart = 'background' | 'clothes' | 'face' | 'hair';

export interface Option {
  key: string;
  name: string;
}

export interface SelectedOptions {
  background: string;
  clothes: string;
  face: string;
  hair: string;
}

export interface ContextType {
  options: SelectedOptions;
  setOptions: Dispatch<SetStateAction<SelectedOptions>>;
}
