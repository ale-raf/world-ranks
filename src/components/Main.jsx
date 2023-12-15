/* eslint-disable react/prop-types */
import Input from "./Input";
import Table from "./Table";

function Main({ data, onSearch }) {
  return (
    <main className="w-9/12">
      <Input
        type="search"
        placeholder="Search by Name, Region, Subregion"
        onSearch={onSearch}
      />
      <Table data={data} />
    </main>
  );
}

export default Main;
