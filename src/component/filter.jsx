import Select from "react-select";
const Filter = ({ setFilter }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Requierd", label: "Requierd" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Rejected", label: "Rejected" }
  ];
  return (
    <>
      <label for="status">Choose a Status to Filter List:</label>

      <Select
        name="status"
        id="staus"
        onChange={(event) => setFilter(event)}
        options={options}
      />
      <br />
      <br />
    </>
  );
};
export default Filter;
