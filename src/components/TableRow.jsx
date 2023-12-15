import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ rowContent }) => {
  const getContent = (rowContent) => {
    let content = [];
    for (let i = 1; i <= 5; i++) {
      switch (i) {
        case 1:
          content.push(
            <td className="p-2" key={i}>
              <img
                className="h-[40px] w-[50px] rounded"
                src={rowContent.flags.png}
              />
            </td>
          );
          break;
        case 2:
          content.push(
            <td className="w-1/4 p-2 text-light-grey-2" key={i}>
              <Link
                to={`/country/${rowContent.name.common
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
              >
                {rowContent.name.common}
              </Link>
            </td>
          );
          break;
        case 3:
          content.push(
            <td className="p-2 text-light-grey-2" key={i}>
              {rowContent.population.toLocaleString("en-US")}
            </td>
          );
          break;
        case 4:
          content.push(
            <td className="p-2 text-light-grey-2" key={i}>
              {rowContent.area.toLocaleString("en-US")}
            </td>
          );
          break;
        case 5:
          content.push(
            <td className="p-2 text-light-grey-2" key={i}>
              {rowContent.region}
            </td>
          );
          break;
      }
    }
    return content;
  };

  return <tr>{getContent(rowContent)}</tr>;
};

export default TableRow;
