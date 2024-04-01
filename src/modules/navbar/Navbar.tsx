import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TweeterIcon } from 'assets/icons/tweeter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { Button, CustomizedRectangle, Logo } from 'components';

const Navbar = () => {
  return (
    <div className='flex w-full justify-center items-center z-10'>
      <div className='flex justify-start w-full h-full'>
        <CustomizedRectangle roundedCorner='down-right'>
          <InstagramIcon className='size-6' />
          <TweeterIcon className='size-6' />
          <FacebookIcon className='size-6' />
        </CustomizedRectangle>
      </div>
      <div className='flex '>
        <Logo />
      </div>
      <div className='flex justify-end w-full items-center'>
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
