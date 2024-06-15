import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeBackground from '../components/HomeBackground/HomeBackground';
import About from '../components/About/About';
import Menu from '../components/Menu/Menu';
import WhyUs from '../components/WhyUs/WhyUs';
import Gallery from '../components/Gallery/Gallery';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
        <HomeBackground />
        <About />
        <Menu />
        <WhyUs />
        <Gallery />
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
