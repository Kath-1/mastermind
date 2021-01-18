import React from "react";
import "./app.css";

const App = () => (
  <main role="main">
    <section className="gameboard">
      <h1>Mastermind</h1>
      <div className="row">
        <div className="row-item guess-container">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
        <div className="row-item hint-container">
          <div className="hole small black"></div>
          <div className="hole small black"></div>
          <div className="hole small white"></div>
          <div className="hole small"></div>
        </div>
      </div>

      <div className="row">
        <div className="row-item guess-container">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
        <div className="row-item hint-container">
          <div className="hole small"></div>
          <div className="hole small"></div>
          <div className="hole small"></div>
          <div className="hole small"></div>
        </div>
      </div>
      <div className="row-item pin-container">
        <div className="pin">
          <div className="pin-head orange"></div>
          <div className="pin-cone"></div>
        </div>
        <div className="pin">
          <div className="pin-head yellow"></div>
          <div className="pin-cone"></div>
        </div>
        <div className="pin">
          <div className="pin-head pink"></div>
          <div className="pin-cone"></div>
        </div>
        <div className="pin">
          <div className="pin-head purple"></div>
          <div className="pin-cone"></div>
        </div>
        <div className="pin">
          <div className="pin-head green"></div>
          <div className="pin-cone"></div>
        </div>
        <div className="pin">
          <div className="pin-head blue"></div>
          <div className="pin-cone"></div>
        </div>
      </div>
    </section>
  </main>
);

export default App;
