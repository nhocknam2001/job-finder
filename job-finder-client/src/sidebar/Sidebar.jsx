import EmploymentType from "./EmploymentType";
import JobPostingData from "./JobPostingData";
import Location from "./Location";
import Salary from "./Salary";
import WorkExperience from "./WorkExperience";

/* eslint-disable react/prop-types */
const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className=" text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleClick={handleClick} handleChange={handleChange} />
      <JobPostingData handleClick={handleClick} handleChange={handleChange} />
      <WorkExperience handleClick={handleClick} handleChange={handleChange} />
      <EmploymentType handleClick={handleClick} handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
