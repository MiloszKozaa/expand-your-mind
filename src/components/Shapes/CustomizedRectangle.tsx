import React, { ReactNode } from 'react';
import './CustomizedRectangle.scss';

interface ICustomizedRectangleProps {
  children?: ReactNode;
  className?: string;
  roundedCorner: 'down-right' | 'top-left' | 'all';
  fill?: boolean;
}

const CustomizedRectangle = ({
  children,
  roundedCorner,
  className,
  fill,
}: ICustomizedRectangleProps) => {
  return (
    <div
      className={`customized-rectangle ${roundedCorner} ${fill ? 'fill' : ''} ${
        children ? 'with-content' : ''
      } ${className}`}>
      {children}
    </div>
  );
};

export default CustomizedRectangle;
