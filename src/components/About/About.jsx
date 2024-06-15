import './About.css';
import {info, aboutData } from '../../constants/data';
import image7 from '../../assets/Images/image7.png';

const About = () => {
  return (
    <section className="about_us" id="about">
      <div className="section_container">
        <div className="about_container">
          <div className="text_section">
            <h2 className="section_title">About Us</h2>
            <h2 className='info-title'>{info.title2}</h2>
            <p>{aboutData}</p>
          </div>
          <div className="image_section">
            <img src={image7} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;