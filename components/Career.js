import { GoSearch } from "react-icons/go";

const Career = () => {
  return (
    <>
      <div className="mb-20 w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%]">
        <div className="h-10 w-60 border flex items-center mt-10">
          <input className="pr-8 text-md" type="text" placeholder="Search" />
          <GoSearch />
        </div>
        {/* After search small blocks */}
        <div className="sm:flex sm:justify-center sm:flex-wrap">
          <div className="w-full h-32 border border-gray mt-10 sm:h-44 sm:w-[30%] sm:mx-3">
            <div className="mt-6 mx-5">
              <h4 className="text-xl font-bold">Sales Exectives</h4>
              <p className="text-primaryColor py-5">More details</p>
            </div>
          </div>
          <div className="w-full h-32 border border-gray mt-10 sm:h-44 sm:w-[30%] sm:mx-3">
            <div className="mt-6 mx-5">
              <h4 className="text-xl font-bold">
                Business Development Manager
              </h4>
              <p className="text-primaryColor py-5">More details</p>
            </div>
          </div>
          <div className="w-full h-32 border border-gray mt-10 sm:h-44 sm:w-[30%] sm:mx-3">
            <div className="mt-6 mx-5">
              <h4 className="text-xl font-bold">
                Business Development Officer (BDO)
              </h4>
              <p className="text-primaryColor py-5">More details</p>
            </div>
          </div>
        </div>
        {/* After search small blocks */}
      </div>
    </>
  );
};

export default Career;
