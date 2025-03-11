import "./App.css";

function App() {
  return (
    <div className="">
      <form action="">
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className=" w-56 border-2 px-4 py-2 rounded-lg outline-0"
            />
          </div>
          <div>
            <select
              className=" w-30 border-2 px-4 py-2 rounded-lg outline-0"
              name="gender"
              id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
