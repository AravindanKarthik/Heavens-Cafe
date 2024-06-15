import { useEffect, useState } from 'react';
import Background from '../../components/Background/Background';
import Hero from '../../components/Hero/Hero';
import { heroData } from '../../constants/data';
import './HomeBackground.css';

const HomeBackground = () => {
    
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 10000);
  }, []);

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </>
  );
};

export default HomeBackground;
