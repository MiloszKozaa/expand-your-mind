import React from 'react';
import Lottie, { Options } from 'react-lottie';
import ExploreYourMindAnimatedLogoDelay from 'assets/animations/ExpandYourMind_AnimatedLogo_delay.json';

interface ILogoProps {
  withoutText?: boolean;
  speed?: number;
  options?: Options;
  height?: number;
}

const Logo = ({
  height = 50,
  options,
  speed = 2,
  withoutText = false,
}: ILogoProps) => {
  return (
    <div className='flex items-center'>
      <Lottie
        options={{
          animationData: ExploreYourMindAnimatedLogoDelay,
          loop: true,
          ...options,
        }}
        width={height}
        height={height}
        speed={speed}
        style={{ margin: 0 }}
      />
      {!withoutText && (
        <div className='flex text-2xl font-medium'>YOURLOGO</div>
      )}
    </div>
  );
};

export default Logo;
