import React from "react";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form>
          <div>
            <label>Height (kg)</label>
            <input value={height} />
          </div>
          <div>
            <label>Weight (cm)</label>
            <input value={weight} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
