import React, { useState } from "react";
import "./index.css";

function App() {
  //State

  const [height, setHeight] = useState("Enter you're height");
  const [weight, setWeight] = useState("Enter you're weight");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBMI = (event) => {
    //prevent submitting
    event.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Please enter a valid height and weight");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(1));

      //Logic for message

      if (bmi < 25) {
        setMessage("You're underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You're a healthy weight");
      } else {
        setMessage("You're overweight");
      }
    }
  };

  //Show image
  let imgSrc = "";

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
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
