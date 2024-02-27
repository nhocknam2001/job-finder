/* eslint-disable react/prop-types */

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <div className=" sidebar-label-container">
      <label>
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className="checkmark"></span>
        {title}
      </label>
    </div>
  );
};

export default InputField;
