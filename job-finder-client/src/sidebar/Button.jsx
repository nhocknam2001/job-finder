const Button = ({ onClickHandle, value, title }) => {
  return (
    <div>
      <button
        onClick={onClickHandle}
        value={value}
        className={`px-4 py-1 border text-base hover:bg-blue hover:text-white`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
