import { location, phone, mail, clock } from '../assets/icons';

const ContactUs = () => {
  return (
    <section id="contact-us" className="max-container">
      <h3 className="text-4xl font-palanquin font-bold py-2">
        <span className="text-coral-red">Contact </span>Us
      </h3>
      <div className="flex flex-col sm:flex-row gap-6 text-slate-gray">
        {/* Address section */}
        <div className="sm:w-1/2">
          <h1 className="text-3xl font-montserrat text-coral-red py-4">
            Heaven's Spot Restro Cafe
          </h1>
          <div className="flex flex-col gap-4">
            <span className="text-lg flex gap-2">
              <div>
                <img src={location} alt={location} width={26} height={26} />
              </div>
              <p>
                7/432, Doctor complex, <br />
                Andagalur gate main road, <br />
                Rasipuram, Namakkal - 637 408.
              </p>
            </span>
            <span className="text-lg flex gap-2">
              <div>
                <img src={phone} alt={phone} width={26} height={26} />
              </div>
              <p>+91 9965696907</p>
            </span>
            <span className="text-lg flex gap-2">
              <div>
                <img src={mail} alt={mail} width={26} height={26} />
              </div>
              <p>heavensspot@gmail.com</p>
            </span>
            <span className="text-lg flex gap-2">
              <div>
                <img src={clock} alt={clock} width={26} height={26} />
              </div>
              <p>Mon - Sun : 11:00 - 23:00</p>
            </span>
          </div>
        </div>
        {/* Map section */}
        <div className="sm:w-1/2">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=11.454977,%2078.172501+(Heaven's%20Spot%20Resto%20Cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="320"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
