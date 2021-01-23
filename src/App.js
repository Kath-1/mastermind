import React from "react";
import "./app.css";
import check from "./check";
import Modal from "./Modal";

const colors = ["orange", "yellow", "pink", "purple", "green", "blue"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: Array.from(
        { length: 4 },
        () => colors[Math.floor(Math.random() * 6)]
      ),
      rows: [],
      currentGuess: Array(4).fill(null),
      selected: 0,
      over: false,
      won: false,
      show: true,
    };
    this.setColor = this.setColor.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  selectHole(i) {
    this.setState({ selected: i });
  }
  setColor(color) {
    const guess = this.state.currentGuess.slice();
    if (this.state.selected || this.state.selected === 0) {
      guess[this.state.selected] = color;
    }
    this.setState({ currentGuess: guess });
    this.setState({
      selected: this.state.selected++ < 3 ? this.state.selected++ : 0,
    });
  }
  checkGuess() {
    if (this.state.currentGuess.indexOf(null) !== -1) return;
    const guess = [...this.state.currentGuess];
    const res = check(this.state.currentGuess, this.state.code);
    const newRows = [...this.state.rows];
    const row = { guess: guess, res: res };
    newRows.push(row);
    this.setState({ rows: newRows });
    if (res.black === 4) {
      this.showModal();
      this.setState({ over: true, won: true });
    } else if (newRows.length === 12) {
      this.showModal();
      this.setState({ over: true, won: false });
    }
    this.setState({ currentGuess: Array(4).fill(null) });
    this.setState({ selected: 0 });
  }
  showModal() {
    this.setState({ show: true });
  }
  hideModal() {
    this.setState({ show: false });
  }
  render() {
    return (
      <main role="main">
        <Modal handleClose={this.hideModal} show={this.state.show}>
          {this.state.won ? (
            <VictoryMessage noOfRows={this.state.rows.length} />
          ) : (
            <GameOverMessage code={this.state.code} />
          )}
        </Modal>

        <h1>Mastermind</h1>
        <section className="gameboard">
          {this.state.rows.map((row, i) => (
            <Row row={row} key={i} />
          ))}
          {!this.state.over ? (
            <div className="row">
              <div className="row-item guess-container">
                {this.state.currentGuess.map((guess, i) => (
                  <Hole
                    key={i}
                    color={guess}
                    selected={this.state.selected}
                    index={i}
                    currentRow={true}
                    onClick={() => this.selectHole(i)}
                  />
                ))}
              </div>
              <CheckButton
                className="row-item"
                disabled={this.state.currentGuess.indexOf(null) !== -1}
                checkGuess={this.checkGuess}
              >
                Check
              </CheckButton>
            </div>
          ) : null}

          <Pins colors={colors} setColor={this.setColor} />
        </section>
      </main>
    );
  }
}

const CheckButton = ({ disabled, checkGuess }) => (
  <button className="row-item" disabled={disabled} onClick={checkGuess}>
    Check
  </button>
);

const Row = ({ row }) => {
  const colors = Array(4).fill(null);
  let i = 0;
  for (let j = 0; j < row.res.black; j++) {
    colors[i] = "black";
    i++;
  }
  for (let j = 0; j < row.res.white; j++) {
    colors[i] = "white";
    i++;
  }
  return (
    <div className="row">
      <div className="row-item guess-container">
        {row.guess.map((guess, i) => (
          <Hole key={i} color={guess} />
        ))}
      </div>
      <div className="row-item hint-container">
        {colors.map((color, i) => (
          <SmallHole key={i} color={color} />
        ))}
      </div>
    </div>
  );
};

const Hole = ({ color, index, selected, currentRow, onClick }) => (
  <div
    className={`hole-border ${
      index === selected && currentRow ? "selected" : ""
    }`}
  >
    <div className={`hole ${color} `} onClick={onClick}></div>
  </div>
);

const SmallHole = ({ color }) => <div className={`hole small ${color}`}></div>;

const Pins = ({ colors, setColor }) => (
  <div className="row-item pin-container">
    {colors.map((color, i) => (
      <Pin color={color} key={i} setColor={setColor} />
    ))}
  </div>
);

const Pin = ({ color, setColor }) => (
  <div className="pin" onClick={() => setColor(color)}>
    <div className={`pin-head ${color}`}></div>
    <div className={`pin-foot ${color}`}></div>
  </div>
);

const VictoryMessage = ({ noOfRows }) => (
  <React.Fragment>
    <h1>Grattis, du vann!</h1>
    <div className="modal-message">{`Du klarade det på ${noOfRows} försök`}</div>
  </React.Fragment>
);

const GameOverMessage = ({ code }) => (
  <React.Fragment>
    <h1>Game over</h1>
    <p className="modal-message">Correct code:</p>
    <div className="row-item guess-container">
      {code.map((guess, i) => (
        <Hole key={i} color={guess} />
      ))}
    </div>
  </React.Fragment>
);

export default App;
