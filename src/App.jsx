import { useEffect, useMemo, useState } from "react";
import {
  filterDataByOptions,
  // filterDataBySearch,
  sortDataByOptions,
} from "./utils/functions";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [data, setData] = useState([]);
  // const [options, setOptions] = useState("");
  const [filters, setFilters] = useState({
    region: "all",
    status: "all",
  });
  const [sort, setSort] = useState("population");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        sortDataByOptions(data, sort);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [sort]);

  const filteredData = useMemo(
    () => filterDataByOptions(data, filters.region, filters.status),
    [data, filters]
  );

  const handleUpdateDataByStatus = (e) => {
    let target;
    if (e.target.id === "unMember") {
      target = e.target.parentElement.nextElementSibling.firstChild;
    } else {
      target = e.target.parentElement.previousElementSibling.firstChild;
    }
    if (e.target.checked) {
      target.checked = false;
      setFilters({ region: "all", status: e.target.id });
    } else {
      setFilters({ ...filters, status: "all" });
    }
  };

  const handleUpdateDataByRegion = (e) => {
    setFilters({ ...filters, region: e.target.innerText });
    e.target.className =
      "py-2 px-4 bg-dark-grey-2 text-light-grey-2 rounded-md";
  };

  const handleSortData = (e) => {
    sortDataByOptions(filteredData, setSort(`${e.target.value}`));
  };

  const handleSearchData = (e) => {
    const results = filteredData.filter((data) => {
      if (e.target.value === "") return filteredData;
      return (
        data.name.common.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.region.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.subregion.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setData(results);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="relative bg-dark-grey-1 text-light-grey-1">
        <div className="container w-11/12 p-10 border-2 border-light-grey-1 rounded-md">
          <div className="flex justify-between p-4">
            <Sidebar
              data={filteredData}
              onSelect={handleSortData}
              onInput={handleUpdateDataByStatus}
              onClick={handleUpdateDataByRegion}
            />
            <Main data={filteredData} onSearch={handleSearchData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
