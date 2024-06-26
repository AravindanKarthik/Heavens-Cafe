const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="relative sm:w-[270px] sm:min-w-[270px] text-center ">
        <img
          src={imgURL}
          alt={label}
          width={270}
          height={270}
        />
      <div className="absolute w-full py-5 text-center bottom-0">
        <h3 className="font-palanquin text-white text-3xl leading-normal font-bold">
          {label}
        </h3>
        <p className=" break-words font-montserrat text-lg leading-normal text-orange-300">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;