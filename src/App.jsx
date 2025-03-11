import { useState } from "react";
import "./App.css";

function App() {
  const [nameError, setNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const gender = e.target.gender.value;

    if (!name.length) {
      setNameError(true);
    } else if (!/^[A-Za-z\s.]+$/.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
      setName(name);
    }

    if (gender == "Select Option") {
      setGenderError(true);
    } else {
      setGenderError(false);
      setGender(gender);
    }
  };

  return (
    <div className="">
      <form
        action=""
        onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className=" w-56 border-2 px-4 py-2 rounded-lg outline-0"
            />
            {nameError ? <div>Please enter your name</div> : <></>}
          </div>
          <div>
            <select
              className=" w-56 border-2 px-4 py-2 rounded-lg outline-0"
              name="gender"
              id="gender">
              <option>Select Option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {genderError ? <div>Select your gender</div> : <></>}
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
        />
      </form>
      <div>
        {
          name && gender? <div>
            <h3>Name: {name}</h3>
            <h3>Gender: {gender}</h3>
          </div>:<></>
        }
      </div>
    </div>
  );
}

export default App;
