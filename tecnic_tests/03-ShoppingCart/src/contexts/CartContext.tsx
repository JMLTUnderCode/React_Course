import React from 'react';
import { type CartContextProps } from '../types';

export const CartContext = React.createContext<CartContextProps | undefined>(undefined);