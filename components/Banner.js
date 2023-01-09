import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="mb-20 xl:mb-24 lg:mb-20">
        {/* Image section */}
        <div className="mb-32 sm:mb-10">
          <Image
            width="1000"
            height="1000"
            className="w-[100%] md:hidden"
            src="/./Pictures/front-img-vertical.jfif"
            alt=""
          />
          <Image
            width="1000"
            height="1000"
            className="hidden w-[100%] md:block"
            src="/./Pictures/front-img-hori.jfif"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
