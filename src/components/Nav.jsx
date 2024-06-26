import { useState, useEffect, useRef } from 'react';
import { hamburger, cross} from '../assets/icons'; // Adjusted for the example
import { navLinks } from '../constants';
import { logo } from '../assets/images';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest('.nav-toggle')
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="padding-x py-2 absolute z-[100] w-full">
      <nav className="flex justify-between items-center max-container px-4 sm:px-6 lg:px-8">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={112}
            height={125.14}
            className="m-0 w-28 h-[125.14px]"
          />
        </a>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <img src={cross} alt="Close menu" className="h-6 w-6" />
            ) : (
              <img src={hamburger} alt="Open menu" className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray-600 hover:text-red-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call to Action Button - Desktop */}
        <div className="hidden lg:block">
          <button className="px-4 py-3 bg-red-600 text-white hover:bg-red-700 rounded-full font-montserrat">
            Order Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-2"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block py-2 px-4 text-lg text-gray-600 hover:text-red-600"
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Call to Action Button - Mobile */}
          <li className="mt-4">
            <button className="block w-full text-center py-3 bg-red-600 text-white hover:bg-red-700 rounded-full font-montserrat">
              Order Now
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;