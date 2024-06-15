import './Background.css';
import video1 from '../../assets/Videos/video1.mp4';
import image1 from '../../assets/Images/image1.jpg';
import image2 from '../../assets/Images/image2.jpg';
import image3 from '../../assets/Images/image3.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="img1" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="img2" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="img3" />;
  }
};
export default Background;
