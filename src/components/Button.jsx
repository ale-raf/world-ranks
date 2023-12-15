/* eslint-disable react/prop-types */

const Button = ({ content, onClick }) => {
  return (
    <>
      <button
        className="py-2 px-4 hover:bg-dark-grey-2 text-light-grey-1 hover:text-light-grey-2 rounded-md"
        onClick={onClick}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
