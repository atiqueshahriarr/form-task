import { useState } from "react";
import "./App.css";

function App() {
  const [fields, setFields] = useState([{id: 1, name: "", gender: "", nameError: false, genderError: false}]);
  console.log(fields);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFields(
      fields.map((field) => ({
        ...field,
        nameError: !field.name,
        genderError: !field.gender,
      }))
    );
  };

  const handleAddField = () => {
    setFields([...fields, {id: fields.length + 1, name: "", gender: "", nameError: false, genderError: false}]);
  };

  const handleNameChange = (id, e) => {
    const {value} = e.target;
    setFields(fields.map((field) => (field.id === id ? {...field, name: value, nameError: false} : field)));
  };

  const handleGenderChange = (id, e) => {
    const {value} = e.target;
    setFields(fields.map((field) => (field.id === id ? {...field, gender: value, genderError: false} : field)));
  };

  const handleRemove = (e, id) => {
    console.log(id);
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div className="">
      <button onClick={handleAddField}>+</button>

      <form
        action=""
        onSubmit={handleSubmit}
        className="space-y-6">
        {fields.map((field) => (
          <div
            className="flex gap-4"
            key={field.id}>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className=" w-56 border-2 px-4 py-2 rounded-lg outline-0"
              value={field.name}
              onChange={(e) => handleNameChange(field.id, e)}
            />
            {field.nameError ? <div>Please enter your name</div> : <></>}
            <select
              className=" w-56 border-2 px-4 py-2 rounded-lg outline-0"
              name="gender"
              id="gender"
              value={field.gender}
              onChange={(e) => handleGenderChange(field.id, e)}>
              <option>Select Option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {field.genderError ? <div>Select your gender</div> : <></>}
            <a
              className="bg-amber-100 text-3xl px-4 cursor-pointer"
              onClick={(e) => handleRemove(e, field.id)}>
              -
            </a>
          </div>
        ))}

        <input
          type="submit"
          value="Submit"
          className="bg-gray-400 px-3"
        />
      </form>
    </div>
  );
}

export default App;
