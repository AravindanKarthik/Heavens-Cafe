import './Hero.css';
import arrow_btn from '../../assets/Icons/arrow_btn.png';
import pause_icon from '../../assets/Icons/pause_icon.png';
import play_icon from '../../assets/Icons/play_icon.png';

const Hero = ({playStatus, setPlayStatus, heroCount, setHeroCount, heroData}) => {
  return (
    
    <div className='hero'>

      <div className='hero-text'>
        <h3>{heroData.text1}</h3>
        <h1>{heroData.text2}</h1>
      </div>

      <div className='hero-explore'>
       <p>Explore</p>
       <img src={arrow_btn} alt='' />
      </div>

      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount===0?'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1?'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2?'hero-dot orange' : 'hero-dot'}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus? pause_icon : play_icon} alt='' />
          <p>Play the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;