import { useEffect, useState } from 'react';

interface ParallaxConfig {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { speed = 0.5, direction = 'up', offset = 0 } = config;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = () => {
    const movement = (scrollY + offset) * speed;
    
    switch (direction) {
      case 'up':
        return `translateY(${-movement}px)`;
      case 'down':
        return `translateY(${movement}px)`;
      case 'left':
        return `translateX(${-movement}px)`;
      case 'right':
        return `translateX(${movement}px)`;
      default:
        return `translateY(${-movement}px)`;
    }
  };

  return {
    transform: getTransform(),
    scrollY,
  };
};

export const useMultiLayerParallax = (layers: ParallaxConfig[]) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return layers.map((layer) => {
    const { speed = 0.5, direction = 'up', offset = 0 } = layer;
    const movement = (scrollY + offset) * speed;
    
    switch (direction) {
      case 'up':
        return `translateY(${-movement}px)`;
      case 'down':
        return `translateY(${movement}px)`;
      case 'left':
        return `translateX(${-movement}px)`;
      case 'right':
        return `translateX(${movement}px)`;
      default:
        return `translateY(${-movement}px)`;
    }
  });
};
