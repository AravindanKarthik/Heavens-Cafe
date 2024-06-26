import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='max-container flex justify-between gap-10 flex-wrap'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
