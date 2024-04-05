import { Button } from 'components';
import { ReactComponent as SmallDots } from 'assets/patterns/small-dots-shape.svg';
import './Content.scss';
import { useRef } from 'react';
import { delayedGsapDefaultOptions } from 'gsap/loadingGsapOptions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Content = () => {
  const bold = useRef(null);
  const light = useRef(null);
  const description = useRef(null);
  const buttons = useRef(null);
  const dots = useRef(null);

  useGSAP(() => {
    gsap.from(bold.current, {
      x: 800,
      ...delayedGsapDefaultOptions(),
    });
    gsap.from(light.current, {
      x: 1000,
      ...delayedGsapDefaultOptions(0.2),
    });
    gsap.from(description.current, {
      x: 1300,
      ...delayedGsapDefaultOptions(0.4),
    });
    gsap.from(dots.current, {
      ...delayedGsapDefaultOptions(1.5),
      duration: 2,
    });
    gsap.from(buttons.current, {
      ...delayedGsapDefaultOptions(1.5),
      duration: 2,
    });
  }, []);

  useGSAP(
    () => {
      gsap.to(dots.current, {
        yoyo: true,
        repeat: -1,
        rotate: 40,
        duration: 20,
        x: 100,
        ease: 'power1.inOut',
      });
    },
    { scope: dots }
  );

  return (
    <div className='content-wrapper z-10'>
      <div className='text'>
        <div className='header'>
          <div ref={bold} className='primary'>
            DISCOVER
          </div>
          <div ref={light} className='secondary'>
            NEW THINGS
          </div>
        </div>
        <div ref={description} className='description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
      </div>
      <div ref={buttons} className='buttons'>
        <Button variant='primary'>SIGN UP</Button>
        <Button>READ MORE</Button>
      </div>
      <SmallDots
        ref={dots}
        className='absolute size-32 -mt-16 ml-16  xl:size-44 xl:-mt-24 xl:ml-20 z-0'
      />
    </div>
  );
};

export default Content;
