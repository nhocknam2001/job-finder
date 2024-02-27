/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  PiCalendar,
  PiClock,
  PiCurrencyDollar,
  PiMapPinLine,
} from "react-icons/pi";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    jobLocation,
    postingDate,
    employmentType,
    description,
  } = data;

  return (
    <section className="card">
      <Link
        to={`/job/${_id}`}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        <img src={companyLogo} alt="Logo" />
        <div>
          <h4 className=" text-primary/70 mb-1">{companyName}</h4>
          <h3 className=" text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <PiMapPinLine /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <PiClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <PiCurrencyDollar /> {minPrice}-{maxPrice}
            </span>
            <span className="flex items-center gap-2">
              <PiCalendar /> {postingDate}
            </span>

            <p className=" text-base text-primary/70">{description}</p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
