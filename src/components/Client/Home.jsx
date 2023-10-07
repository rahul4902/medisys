import React, { Suspense } from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import FullBodyCheckup from "./FullBodyCheckup";
import OurCommit from "./OurCommit";
import PopularPackages from "./PopularPackages";
import SearchForm from "./SearchForm";
import Loader from "../Loader";
const FrequentBook = React.lazy(() => import("./FrequentBook"));
const Home = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <Suspense fallback={<Loader />}>
        <FrequentBook />
      </Suspense>
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
