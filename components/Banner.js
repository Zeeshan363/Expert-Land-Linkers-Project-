const Banner = () => {
  return (
    <>
      <div className="mb-20 xl:mb-24 lg:mb-20">
        {/* Image section */}
        <div className="mb-32 sm:mb-10">
          <img
            className="w-[100%] md:hidden"
            src="./Pictures/front-img-vertical.jfif"
            alt=""
          />
          <img
            className="hidden w-[100%] md:block"
            src="./Pictures/front-img-hori.jfif"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
