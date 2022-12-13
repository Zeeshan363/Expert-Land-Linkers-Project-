import { BsTelephone } from "react-icons/bs";
function Topbar() {
  return (
    <div className="border-2 flex justify-between">
      <div className="border-2 ml-5">
        {/*Icon */}
        <BsTelephone />
        <p className="text-primaryColor">+92311111177238738738</p>
      </div>
      <div className="border-2 border-darkColor mr-5">
        <button className="font-fancy bg-primaryColor text-lightColor py-[2px] px-4 rounded-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Topbar;
