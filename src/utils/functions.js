export const filterDataByOptions = (datas, region, status) => {
  return datas.filter((data) => {
    console.log("region : ", region, "///", "status : ", status);
    if (status === "all") {
      switch (region) {
        case "Africa":
          return data.region === "Africa";
        case "Americas":
          return data.region === "Americas";
        case "Asia":
          return data.region === "Asia";
        case "Antarctic":
          return data.region === "Antarctic";
        case "Europe":
          return data.region === "Europe";
        case "Oceania":
          return data.region === "Oceania";
        default:
          break;
      }
    }
    if (region === "all") {
      switch (status) {
        case "unMember":
          return data.unMember === true;
        case "independant":
          return data.unMember === false;
        default:
          return datas;
      }
    }
  });
};

export const sortDataByOptions = (data, options) =>
  options === "name"
    ? data.sort((a, b) => a.name.common.localeCompare(b.name.common))
    : data.sort((a, b) => a[options] - b[options]);

// export const filterDataBySearch = (datas, e) => {
//   const results = datas.filter((data) => {
//     if (e === "") return datas;
//     return data.name.common.toLowerCase().includes(e);
//   });
//   return results;
// };
