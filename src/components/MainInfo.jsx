/* eslint-disable react/prop-types */
const MainInfo = ({ content, prop }) => {
  return (
    <p className="flex items-center gap-4 py-2 px-6 bg-dark-grey-2  rounded-md">
      {content}
      <span className="pl-4 border-l-2 border-dark-grey-1 text-lg">
        {prop.toLocaleString("en-US")}
      </span>
    </p>
  );
};

export default MainInfo;
