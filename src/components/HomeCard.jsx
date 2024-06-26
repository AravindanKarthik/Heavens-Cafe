const HomeCard = ({ imgURL, changeBigFoodImage, bigFoodImg }) => {
  const handleClick = () => {
    if (bigFoodImg !== imgURL.bigFood) {
      changeBigFoodImage(imgURL.bigFood);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigFoodImg === imgURL.bigFood
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='food thumbnail'
          width={127}
          height={50}
          className='object-contain  w-[127px] h-[50px]'
        />
      </div>
    </div>
  );
};

export default HomeCard;