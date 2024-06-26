import Burger from '../assets/images/About/recipeburger.png';
import { Button, Slider } from '../components';

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-16 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>Food
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a culinary adventure with us! Our kitchen is a canvas where
          flavors come alive. From farm-to-table ingredients to innovative
          recipes, we’re passionate about creating memorable dining experiences.
          Join us as we celebrate food, flavor, and community.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="Explore" />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={Burger}
          alt='burger'
          width={300}
          height={200}
          className='object-contain'
        />
      </div>    </section>
  );
};

export default About;
