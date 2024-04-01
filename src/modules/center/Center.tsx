import { ReactComponent as RingLarge } from 'assets/patterns/center/ring-large.svg';
import { ReactComponent as RingSmall } from 'assets/patterns/center/ring-small.svg';
import { ReactComponent as RingMiddle } from 'assets/patterns/center/ring-middle.svg';
import { ReactComponent as CenterPlanet } from 'assets/patterns/center/center.svg';
import './Center.scss';

const Center = () => {
  return (
    <div className='center-wrapper'>
      <RingLarge className='ring small' />
      <RingSmall className='ring middle' />
      <RingMiddle className='ring large' />
      <CenterPlanet className='center-planet' />
      <img
        className='image'
        src={`${process.env.PUBLIC_URL}/images/ExpandYourMind_person.png`}
        alt='person'
      />
    </div>
  );
};

export default Center;
