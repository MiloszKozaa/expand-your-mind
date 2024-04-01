import { Button } from 'components';
import { ReactComponent as SmallDots } from 'assets/patterns/small-dots-shape.svg';
import './Content.scss';

const Content = () => {
  return (
    <div className='content-wrapper z-10'>
      <div className='text'>
        <div className='header'>
          <div className='primary'>DISCOVER</div>
          <div className='secondary'>NEW THINGS</div>
        </div>
        <div className='description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
      </div>
      <div className='buttons'>
        <Button variant='primary'>SIGN UP</Button>
        <Button>READ MORE</Button>
      </div>
      <SmallDots className='absolute size-32 -mt-16 ml-16  xl:size-44 xl:-mt-24 xl:ml-20 z-0' />
    </div>
  );
};

export default Content;
