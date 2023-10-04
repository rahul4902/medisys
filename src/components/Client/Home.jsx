import Banner from "./Banner";
import Faq from "./Faq";
import FullBodyCheckup from "./FullBodyCheckup";
import OurCommit from "./OurCommit";
import PopularPackages from "./PopularPackages";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <FullBodyCheckup />
      <PopularPackages />
      <div className="bg-gray-light">
        <OurCommit />
      </div>
      <Faq />
    </div>
  );
};
export default Home;
