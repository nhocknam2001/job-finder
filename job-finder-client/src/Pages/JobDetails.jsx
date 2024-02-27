import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Single Job Page"} path={"single job"} />
      <div className="py-4">
        <h1 className=" text-2xl">{job.jobTitle}</h1>
        <h2>Company: {job.companyName}</h2>
        <h2>Salary: {`${job.minPrice} - ${job.maxPrice}`}</h2>
        <h2>Location: {job.jobLocation}</h2>
        <h2>Description: {job.description}</h2>
        <h2>Post-date: {job.postingDate}</h2>
      </div>
      <div className=" flex items-center justify-center">
        <button className=" bg-blue px-8 py-2 text-white" onClick={handleApply}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
