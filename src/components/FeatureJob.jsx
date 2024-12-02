import { featuredJobs } from "../assets/assets";
import CardSlider from "./CardSlider";
import Title from "./Title";


const FeatureJob = () => {
  

  return (
    <div className="feature-job mt-12">
      <Title heading={"Featured Jobs"} />

      <div className="mt-6">
        <CardSlider jobList={featuredJobs}/>
      </div>
    </div>
  );
};

export default FeatureJob;
