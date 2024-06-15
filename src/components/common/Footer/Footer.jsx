import './Footer.css';
// import Heavens from '../../../assets/Logo/';
import {
  copyrightYear,
  info,
  mobNos,
  openingHours,
  footerLinks,
  socialMediaLinks,
} from '../../../constants/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="section_container" id="contact">
        <div className="footer_section">
          <div className="footer_logo">
            <a href="index.html">
              {/* <img src='' alt="Heavens Logo" /> */}
              <h2>{info.title}</h2>
            </a>
          </div>

          <div className="useful_links">
            <h3>Support</h3>
            <ul>
              {footerLinks?.map((link, index) => (
                <li key={index}>
                  <Link to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact_us">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i>{' '}
                <span className="address">{info?.address}</span>
              </li>
              {mobNos?.map((data, index) => (
                <li key={index}>
                  <i className="fa-solid fa-phone"></i>{' '}
                  <span>{data?.no}</span>
                </li>
              ))}
              {openingHours?.map((data, index) => (
                <li key={index}>
                  <i className="fa-solid fa-clock"></i>{' '}
                  <span className="timing">{data?.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="follow_us">
            <h3>Follow Us</h3>
            <a href={socialMediaLinks?.facebook}>
              <i
                style={{ color: '#3b5998' }}
                className="fa-brands fa-square-facebook"
              ></i>
            </a>
            <a href={socialMediaLinks?.x}>
              <i style={{ color: '#000000' }} className="fa-brands fa-x-twitter"></i>
            </a>
            <a href={socialMediaLinks?.instagram}>
              <i
                style={{ color: '#e4405f' }}
                className="fa-brands fa-instagram"
              ></i>
            </a>
            <a href={socialMediaLinks?.youtube}>
              <i
                style={{ color: '#ff0000' }}
                className="fa-brands fa-youtube"
              ></i>
            </a>
          </div>
        </div>
        <div className="copyright-text">
          <p>
            Copyrights © {copyrightYear} {info?.title2}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;