import React from 'react';
import { Content, Header } from './components';

const Middle = () => {
  return (
    <div className='flex h-full justify-between items-center z-10'>
      <Header />
      <Content />
    </div>
  );
};

export default Middle;
