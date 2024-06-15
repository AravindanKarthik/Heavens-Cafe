import { whyUs } from '../../constants/data';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why_us" id="why">
      <h2 className="section_title">Why Us?</h2>
      <div className="section_container">
        <div className="why_container">
          {whyUs.map((data) => (
            <div className="why_items" key={data.id}>
              <img src={data.image} alt={data.alt} />
              <div className="why_us_text">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;