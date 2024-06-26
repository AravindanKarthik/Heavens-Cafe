import { foods } from "../constants";
import { FoodCard } from "../components";

const Gallery = () => {
  return (
    <section id='gallery' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Foods
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
         Explore our culinary delights, where every dish is a masterpiece. 
         Welcome to a world of taste and satisfaction!
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {foods.map((product, index) => (
          <FoodCard key={index} {...product} />
        ))} 
      </div>
    </section>
  );
};

export default Gallery;