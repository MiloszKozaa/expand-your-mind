import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'default' | 'highlighted' | 'primary';
}

const Button = ({ variant = 'default', children, ...props }: IButtonProps) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
