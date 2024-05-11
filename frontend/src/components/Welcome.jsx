import React from "react";
import '../css/dashboard.css'
const Welcome = () => {
  return (
    <div id="dashboard">
      <div className="mini-box students">
        <h2>Total d'étudiants</h2>
        <p>6</p>
      </div>
      <div className="mini-box teachers">
        <h2>Total Enseignants</h2>
        <p>3</p>
      </div>
      <div className="mini-box courses">
        <h2>Total de cours</h2>
        <p>7</p>
      </div>
      <div className="mini-box rooms">
        <h2>Total de salles</h2>
        <p>6</p>
      </div>
    </div>
  );
};

export default Welcome;
