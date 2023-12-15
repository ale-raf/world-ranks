/* eslint-disable react/prop-types */
import search from "../assets/Search.svg";

const Input = ({ type, label, onInput, id, placeholder, onSearch }) => {
  if (type === "checkbox") {
    return (
      <div className="flex items-center gap-2 mb-2">
        <input
          className="h-5 w-5 bg-dark-grey-1"
          type={type}
          onInput={onInput}
          id={id}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4 w-fit ml-auto mb-4 p-2 bg-dark-grey-2 rounded-md focus:border-light-grey-1 focus:border-2">
      <img src={search} alt="" className="cursor-pointer" />
      <input
        className="w-72 bg-dark-grey-2 rounded-md focus:outline-none"
        type={type}
        placeholder={placeholder}
        onInput={onSearch}
      />
    </div>
  );
};

export default Input;
