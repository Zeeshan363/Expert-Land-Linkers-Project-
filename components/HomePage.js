import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import BoxesHome from "./BoxesHome";
import HomeSectionThreeChoose from "./HomeSectionThreeChoose";
import Promise from "./Promise";
import Reviews from "../components/Reviews";
import Queries from "../components/Queries";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BoxesHome />
      <HomeSectionThreeChoose />
      <Promise />
      <Queries />
      <Footer />
    </>
  );
};

export default HomePage;

{
  /* <Reviews /> */
}
