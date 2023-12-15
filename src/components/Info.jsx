/* eslint-disable react/prop-types */

const Info = ({ country, content }) => {
  if (Array.isArray(country)) {
    return (
      <div className="flex justify-between py-6 px-4 border-t border-dark-grey-2">
        <p className="text-light-grey-1">{content}</p>
        {country.map((continent) => (
          <p key={continent}>{continent}</p>
        ))}
      </div>
    );
  }

  if (typeof country === "object") {
    return (
      <div className="flex justify-between py-6 px-4 border-t border-dark-grey-2">
        <p className=" text-light-grey-1 ">{content}</p>
        {country ? (
          <p>
            {Object.keys(country).map((language) => {
              return Object.keys(country).indexOf(language) ===
                Object.keys(country).length - 1
                ? country[language]
                : country[language] + ", ";
            })}
          </p>
        ) : (
          <p>❌ No {content.toLowerCase()}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-between py-6 px-4 border-t border-dark-grey-2">
      <p className="text-light-grey-1">{content}</p>
      <p>{country ?? `❌ No ${content.toLowerCase()}`}</p>
    </div>
  );
};

export default Info;
