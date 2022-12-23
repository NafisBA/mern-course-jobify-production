import { useAppContext } from "../context/appContext.js";
import Loading from "./Loading.js";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job.js";

import Alert from "./Alert.js";
import { useEffect } from "react";

import PageBtnContainer from "./PageBtnContainer.js";
const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchType,
    searchStatus,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchType, searchStatus, sort]);
  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>no jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {showAlert && <Alert/>}
      <h5>
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
      {/* pagination buttons */}
    </Wrapper>
  );
};

export default JobsContainer;
