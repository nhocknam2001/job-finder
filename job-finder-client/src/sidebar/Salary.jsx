import Button from "./Button";
import InputField from "../components/InputField";

/* eslint-disable react/prop-types */
const Salary = ({ handleChange }) => {
  return (
    <div>
      <h4 className=" text-lg mb-2">Salary</h4>
      <div className=" mb-4 flex">
        <Button onClickHandle={handleChange} value="" title="Hourly" />
        <Button onClickHandle={handleChange} value="Monthly" title="Monthly" />
        <Button onClickHandle={handleChange} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
