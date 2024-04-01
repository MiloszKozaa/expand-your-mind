import CustomizedRectangle from 'components/Shapes/CustomizedRectangle';
import { ReactComponent as LargeDots } from 'assets/patterns/large-dots-shape.svg';
import { ReactComponent as Circle } from 'assets/patterns/circle.svg';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex w-full justify-end items-end z-10'>
      <div className='absolute left-0'>
        <Circle className='' />
        <LargeDots className='absolute bottom-0' />
      </div>
      <CustomizedRectangle
        roundedCorner='top-left'
        fill
        className='h-14 w-96'
      />
    </div>
  );
};

export default Footer;
