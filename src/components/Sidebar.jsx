/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./Button";
import Input from "./Input";

function Sidebar({ data, onSelect, onInput, onClick }) {
  return (
    <aside className="flex flex-col gap-10">
      <p>Found {data.length} countries</p>
      <div className="sort">
        <div className="flex flex-col">
          <label htmlFor="sort" className="mb-2">
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            className="w-fit py-2 px-4 bg-dark-grey-1 border-dark-grey-2 border-2 rounded-md"
            onInput={onSelect}
          >
            <option value="population">Population</option>
            <option value="name">Name</option>
            <option value="area">Area</option>
          </select>
        </div>
      </div>
      <div className="region flex flex-wrap gap-2">
        <p className="w-full mb-2">Region</p>
        <Button content="Africa" onClick={onClick} />
        <Button content="Americas" onClick={onClick} />
        <Button content="Antarctic" onClick={onClick} />
        <Button content="Asia" onClick={onClick} />
        <Button content="Europe" onClick={onClick} />
        <Button content="Oceania" onClick={onClick} />
      </div>
      <div className="status">
        <p className="mb-2">Status</p>
        <Input
          id="unMember"
          type="checkbox"
          label="Member of the United Nations"
          onInput={onInput}
        />
        <Input
          id="independant"
          type="checkbox"
          label="Independant"
          onInput={onInput}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
