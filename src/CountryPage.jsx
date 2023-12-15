/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import MainInfo from "./components/MainInfo";

const CountryPage = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // setLoading(false);
      })
      .catch((error) => {
        // setError(error);
        // setLoading(false);
      });
  }, []);

  const { countryName } = useParams();

  const datas = data.filter(
    (data) =>
      data.name.common.toLowerCase().split(" ").join("-") === countryName
  );

  return (
    <>
      <Header />
      <div className="relative p-4 bg-dark-grey-1 text-light-grey-2">
        {datas.map((country, index) => {
          const neighbouringCountries = data.filter((data) => {
            return country.borders ? country.borders.includes(data.cca3) : null;
          });

          return (
            <div
              className="max-w-3xl my-0 mx-auto border border-dark-grey-2 rounded-md"
              key={index}
            >
              <img
                className="absolute -top-14 left-[50%] -translate-x-[50%] max-h-[160px] rounded-md"
                src={country.flags.png}
                alt={country.flags.alt}
              />
              <div className="mt-32">
                <div className="flex flex-col items-center">
                  <h1 className=" text-4xl font-semibold">
                    {country.name.common}
                  </h1>
                  {country.name.common !== country.name.official && (
                    <h2 className="mt-2 text-lg font-semibold">
                      {country.name.official}
                    </h2>
                  )}
                  <div className="flex gap-6 my-10">
                    <MainInfo content="Population" prop={country.population} />
                    <MainInfo content="Area (km²)" prop={country.area} />
                  </div>
                </div>
                <Info country={country.capital} content="Capital" />
                <Info country={country.subregion} content="Subregion" />
                <Info country={country.languages} content="Language" />
                {/* <Info country={country.currencies} content="Currencies" /> */}
                <div className="flex justify-between py-6 px-4 border-t border-dark-grey-2">
                  <p className=" text-light-grey-1 ">Currencies</p>
                  {country.currencies ? (
                    <p>
                      {Object.keys(country.currencies).map((currency) => {
                        return Object.keys(country.currencies).indexOf(
                          currency
                        ) ===
                          Object.keys(country.currencies).length - 1
                          ? country.currencies[currency]["name"]
                          : country.currencies[currency]["name"] + ", ";
                      })}
                    </p>
                  ) : (
                    <p>❌ No currency</p>
                  )}
                </div>
                <Info country={country.continents} content="Continents" />
                <div className="flex flex-col gap-4 py-6 px-4 border-t border-dark-grey-2">
                  <p className=" text-light-grey-1 ">Neighbouring Countries</p>
                  <div className="flex flex-wrap gap-4">
                    {country.borders ? (
                      neighbouringCountries.map((country, index) => (
                        <Link
                          to={`/country/${country.name.common
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`}
                          key={index}
                          className="flex flex-col items-center gap-2 max-w-[125px]"
                        >
                          <img
                            className="h-[50px] w-[80px] object-cover rounded-md"
                            src={country.flags.png}
                            alt={country.flags.alt}
                          />
                          <p className="max-w-max text-sm text-center">
                            {country.name.common}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <p>❌ {country.name.common} doesn't have direct border</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountryPage;
