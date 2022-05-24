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
  selectedOptions: SelectedOptions;
  setSelectedOptions: Dispatch<SetStateAction<SelectedOptions>>;
}
