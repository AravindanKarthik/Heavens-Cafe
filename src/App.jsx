import { useEffect } from 'react';
import { Nav } from './components';
import {
  CustomerReviews,
  Home,
  About,
  Menu,
  Services,
  Gallery,
  ContactUs,
  Footer,
} from './sections';

const App = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    scrollToTop();
    
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []); 

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Home />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Menu />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Gallery />
      </section>
      <section className="padding-x sm:py-16 py-8 w-full">
        <ContactUs />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;