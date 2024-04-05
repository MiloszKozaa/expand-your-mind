import { ReactComponent as RingLarge } from 'assets/patterns/center/ring-large.svg';
import { ReactComponent as RingSmall } from 'assets/patterns/center/ring-small.svg';
import { ReactComponent as RingMiddle } from 'assets/patterns/center/ring-middle.svg';
import { ReactComponent as CenterPlanet } from 'assets/patterns/center/center.svg';
import './Center.scss';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { delayedGsapDefaultOptions } from 'gsap/loadingGsapOptions';

const Center = () => {
  const circle = useRef(null);

  useGSAP(() => {
    gsap.from(circle.current, {
      y: 1000,
      ...delayedGsapDefaultOptions(),
    });
  }, []);

  useGSAP(
    () => {
      const getRingGsapOptions = (rotate?: number): gsap.TweenVars => ({
        rotate: rotate ?? 0,
        duration: Math.floor(Math.random() * 50) + 30,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        '.ring.small',
        getRingGsapOptions(0),
        getRingGsapOptions(100)
      );
      gsap.fromTo(
        '.ring.middle',
        getRingGsapOptions(15),
        getRingGsapOptions(-90)
      );
      gsap.fromTo(
        '.ring.large',
        getRingGsapOptions(-50),
        getRingGsapOptions(120)
      );
    },
    { scope: circle }
  );

  return (
    <div ref={circle} className='center-wrapper'>
      <RingLarge className='ring large' />
      <RingSmall className='ring small' />
      <RingMiddle className='ring middle' />
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
