import CustomizedRectangle from 'components/Shapes/CustomizedRectangle';
import { ReactComponent as LargeDots } from 'assets/patterns/large-dots-shape.svg';
import { ReactComponent as Circle } from 'assets/patterns/circle.svg';
import React, { useRef } from 'react';
import { delayedGsapDefaultOptions } from 'gsap/loadingGsapOptions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Footer = () => {
  const footerLeft = useRef(null);
  const footerRight = useRef(null);

  useGSAP(() => {
    gsap.from(footerRight.current, {
      y: 150,
      x: 300,
      ...delayedGsapDefaultOptions(),
    });
    gsap.from(footerLeft.current, {
      y: 200,
      x: -300,
      ...delayedGsapDefaultOptions(),
    });
  }, []);

  return (
    <div className='flex w-full justify-end items-end z-10'>
      <div ref={footerLeft} className='absolute left-0'>
        <Circle className='' />
        <LargeDots className='absolute bottom-0' />
      </div>
      <div ref={footerRight}>
        <CustomizedRectangle
          roundedCorner='top-left'
          fill
          className='h-14 w-96'
        />
      </div>
    </div>
  );
};

export default Footer;
