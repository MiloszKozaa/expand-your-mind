import './Header.scss';
import { delayedGsapDefaultOptions } from 'gsap/loadingGsapOptions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Header = () => {
  const bold = useRef(null);
  const light = useRef(null);

  useGSAP(() => {
    gsap.from(bold.current, {
      x: -800,
      ...delayedGsapDefaultOptions(),
    });
    gsap.from(light.current, {
      x: -1000,
      ...delayedGsapDefaultOptions(0.2),
    });
  }, []);

  return (
    <div className='header-wrapper z-10'>
      <div ref={bold} className='header primary'>
        EXPAND
      </div>
      <div ref={light} className='header secondary'>
        YOUR MIND
      </div>
    </div>
  );
};

export default Header;
