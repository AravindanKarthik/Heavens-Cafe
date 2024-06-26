import { Slider } from '../components';

const Menu = () => {
  return (
    <section id="menu" className="max-container">
      <div className="flex flex-col justify-center items-center gap-12">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Special </span>Menu
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default Menu;