import Job from "../components/Job";
import Wrapper from "../assets/Wrapper/JobContainerPage";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

function JobsContainer() {
    const { jobs, isLoading, page, totalJobs, numOfPages, search, searchStatus, searchType, sort } = useSelector(
        (store) => store.allJobs
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, [page,search,searchStatus,searchType,sort]);

    if (isLoading) {
        return (
            <Wrapper>
                <Loading center />
            </Wrapper>
        );
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No Jobs to display....</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && "s"} found
            </h5>
            <div className="jobs">
                {jobs.map((job) => {
                    console.log(job);
                    return <Job key={job._id} {...job} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    );
}

export default JobsContainer;
