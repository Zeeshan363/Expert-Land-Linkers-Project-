import Image from "next/image";
import frontImgVert from "../public/Pictures/front-img-vert.jpg";
import frontImgHori from "../public/Pictures/front-img-hori.jpg";

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
            src={frontImgVert}
            alt=""
          />
          <Image
            width="1000"
            height="1000"
            className="hidden w-[100%] md:block"
            src={frontImgHori}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
