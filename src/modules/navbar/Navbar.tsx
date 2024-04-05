import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TweeterIcon } from 'assets/icons/tweeter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { Button, CustomizedRectangle, Logo } from 'components';
import {
  delayedGsapDefaultOptions,
  loadingAnimateDuration,
} from 'gsap/loadingGsapOptions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Navbar = () => {
  const socials = useRef(null);
  const logo = useRef(null);
  const buttons = useRef(null);

  useGSAP(() => {
    gsap.from(logo.current, {
      delay: loadingAnimateDuration,
      duration: 1,
      y: 400,
      scale: 3,
      ease: 'power1.inOut',
    });
    gsap.from(socials.current, {
      x: -400,
      y: -200,
      ...delayedGsapDefaultOptions(),
    });
    gsap.from(buttons.current, {
      x: 400,
      y: -200,
      ...delayedGsapDefaultOptions(),
    });
  }, []);

  return (
    <div className='flex w-full justify-center items-center z-10'>
      <div ref={socials} className='flex justify-start w-full h-full'>
        <CustomizedRectangle roundedCorner='down-right'>
          <InstagramIcon className='size-6' />
          <TweeterIcon className='size-6' />
          <FacebookIcon className='size-6' />
        </CustomizedRectangle>
      </div>
      <div ref={logo} className='flex '>
        <Logo />
      </div>
      <div ref={buttons} className='flex justify-end w-full items-center'>
        <Button>HOME</Button>
        <Button>ABOUT</Button>
        <Button>BLOG</Button>
        <Button>CONTACT</Button>
        <Button variant='highlighted'>SIGN UP</Button>
      </div>
    </div>
  );
};

export default Navbar;
