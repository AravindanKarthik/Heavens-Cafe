import {
  footerLinks,
  socialMedia,
  copyrightYear,
  info,
  contact,
} from '../constants';
import { logo } from '../assets/images';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              width={112}
              height={125.14}
              className="m-0 w-28 h-[125.14px]"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-semibold font-montserrat text-white-400 sm:max-w-sm">
            Follow us on
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia?.map((data, i) => (
              <div
                className="flex justify-center items-center w-10 h-10 bg-white rounded-full hover:scale-110 duration-500 transition ease-in-out"
                key={i}
              >
                <a href={data.link}>
                  <img src={data.src} alt={data.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks?.map((section, i) => (
            <div key={i}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((data, i) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={i}
                  >
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {contact?.map((section, i) => (
            <div key={i}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((data, i) => (
                  <div key={i} className="flex gap-2 mt-3">
                    <img src={data.src} alt={data.alt} width={28} height={28} />
                    <li className=" font-montserrat text-base py-1 leading-normal text-white-400 hover:text-slate-gray">
                      <a href={data.link}>{data.name}</a>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col border-t mt-20 flex-1 justify-center items-center gap-2 font-montserrat ">
        <p className="text-white py-4 mt-4 text-center font-montserrat text-base leading-normal">
          Copyrights © {copyrightYear} {info?.title2}. All Rights Reserved.
        </p>
        <p className="text-white text-center">
          Developed & Maintained by{' '}
          <a
            href="https://github.com/AravindanKarthik"
            className="font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
          >
            Aravindan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;