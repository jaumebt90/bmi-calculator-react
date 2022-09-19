import React, { useState } from "react";
import "./index.css";

function App() {
  //State

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgSrc = "";

  let calcBMI = (event) => {
    //prevent submitting
    event.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Please enter a valid height and weight");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(1));
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form>
          <div>
            <label>Height (kg)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight (cm)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
