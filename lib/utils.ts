import { type ClassValue, clsx } from "clsx"
import { CSSProperties } from 'react';
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const convertStylesToObject = (styles: { [key: string]: string }): { [key: string]: CSSProperties } => {
  const convertedStyles: { [key: string]: CSSProperties } = {};

  for (const [key, value] of Object.entries(styles)) {
    convertedStyles[key] = { [key]: value };
  }

  return convertedStyles;
};