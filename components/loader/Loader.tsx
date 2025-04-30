"use client"

import React from 'react';
import { useTheme } from 'next-themes';

type LoaderProps = {
  size?: number;
  color?: string;
  borderWidth?: number;
};

const Loader = ({ size = 48, color, borderWidth = 4 }: LoaderProps) => {
  const { theme, systemTheme } = useTheme();

  let loaderColor: string;

  if (color) {
    loaderColor = color;
  } else {
    if (theme === 'system') {
      loaderColor = systemTheme === 'dark' ? '#fff' : '#000';
    } else {
      loaderColor = theme === 'dark' ? '#fff' : '#000';
    }
  }

  return (
    <span
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${borderWidth}px solid ${loaderColor}`,
        borderTop: `${borderWidth}px solid transparent`,
      }}
      className="inline-block border-4 rounded-full border-solid animate-spin"
    ></span>
  );
};

export default Loader;