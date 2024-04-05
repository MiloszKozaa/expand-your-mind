export const loadingAnimateDuration = 4;

export const delayedGsapDefaultOptions = (delay?: number): gsap.TweenVars => ({
  duration: 1,
  delay: loadingAnimateDuration + (delay ?? 0),
  opacity: 0,
  ease: 'power1.inOut',
});
