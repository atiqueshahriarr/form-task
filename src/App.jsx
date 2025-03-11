import { useState } from "react";
import "./App.css";
import Table from "./Component/Table";

function App() {
  const [fields, setFields] = useState([{id: 1, name: "", gender: "", nameError: false, genderError: false}]);
  console.log(fields);
  const [showValue, setShowValue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFields(
      fields.map((field) => ({
        ...field,
        nameError: !field.name,
        genderError: !field.gender,
      }))
    );
    setShowValue(true);
  };

  const handleAddField = () => {
    setFields([...fields, {id: fields.length + 1, name: "", gender: "", nameError: false, genderError: false}]);
    setShowValue(false);
  };

  const handleNameChange = (id, e) => {
    const {value} = e.target;
    setFields(fields.map((field) => (field.id === id ? {...field, name: value, nameError: false} : field)));
    setShowValue(false);
  };

  const handleGenderChange = (id, e) => {
    const {value} = e.target;
    setFields(fields.map((field) => (field.id === id ? {...field, gender: value, genderError: false} : field)));
    setShowValue(false);
  };

  const handleRemove = (e, id) => {
    console.log(id);
    setFields(fields.filter((field) => field.id !== id));
    setShowValue(false);
  };

  return (
    <div className="bg-neutral-900 min-h-screen w-full flex items-center justify-center py-10">
      <div className="text-white bg-neutral-800 p-6 md:p-10 rounded-2xl">
        <div className="flex justify-between items-center mb-4 gap-6 font-semibold">
          <p className="text-2xl md:text-3xl text-primary">Information:</p>
          <button
            className="bg-primary text-sm md:text-base h-8  w-26 md:w-32 flex items-center justify-center gap-2     font-semibold    rounded-lg  hover:bg-secondary cursor-pointer transition-all duration-300"
            onClick={handleAddField}>
            Add Field
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="w-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="space-y-2">
          {fields.map((field) => (
            <div
              className="flex  gap-2 md:gap-3"
              key={field.id}>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-48 md:w-60 border-2  border-neutral-700 focus:border-neutral-500  px-4 h-10 rounded-lg outline-0"
                  value={field.name}
                  onChange={(e) => handleNameChange(field.id, e)}
                />
                {field.nameError ? <div className="text-xs text-primary">Please enter your name *</div> : <></>}
              </div>
              <div>
                <select
                  className=" w-fit border-2 border-neutral-700 focus:border-neutral-500  px-4 h-10 rounded-lg outline-0 "
                  name="gender"
                  id="gender"
                  value={field.gender}
                  onChange={(e) => handleGenderChange(field.id, e)}>
                  <option
                    disabled
                    value=""
                    className="bg-neutral-900 hover:bg-primary">
                    Gender
                  </option>
                  <option
                    className="bg-neutral-900 hover:bg-primary"
                    value="Male">
                    Male
                  </option>
                  <option
                    className="bg-neutral-900 hover:bg-primary"
                    value="Female">
                    Female
                  </option>
                </select>
                {field.genderError ? <div className="text-xs text-primary">Select gender *</div> : <></>}
              </div>
              <a
                className="flex items-center justify-center h-10  hover:text-primary cursor-pointer transition-all duration-300"
                onClick={(e) => handleRemove(e, field.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="w-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>
            </div>
          ))}

          <input
            type="submit"
            value="Submit"
            className="bg-primary font-bold h-8 w-full flex items-center justify-center  rounded-lg  hover:bg-secondary cursor-pointer transition-all duration-300"
          />
        </form>

        <Table
          showValue={showValue}
          fields={fields}></Table>
      </div>
    </div>
  );
}

export default App;
