import React from "react";
import "./app.css";

const App = () => (
  <main role="main">
    <h1>Mastermind</h1>
    <section className="gameboard">
      <Row />
      <Pins />
    </section>
  </main>
);

const Row = (props) => (
  <div className="row">
    <div className="row-item guess-container">
      <Hole />
      <Hole />
      <Hole />
      <Hole />
    </div>
    <div className="row-item hint-container">
      <SmallHole />
      <SmallHole />
      <SmallHole />
      <SmallHole />
    </div>
  </div>
);

const Hole = (props) => <div className="hole"></div>;

const SmallHole = (props) => <div className="hole small "></div>;

const Pins = (props) => (
  <div className="row-item pin-container">
    <Pin color="orange" />
    <Pin color="yellow" />
    <Pin color="pink" />
    <Pin color="purple" />
    <Pin color="green" />
    <Pin color="blue" />
  </div>
);

const Pin = ({ color }) => (
  <div className="pin">
    <div className={`pin-head ${color}`}></div>
    <div className="pin-cone"></div>
  </div>
);

export default App;
