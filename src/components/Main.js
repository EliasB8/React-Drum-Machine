import React from "react";
import Drum from "./Drum";
import Controller from "./Controller";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div id="drum-machine" className="drum-machine-container">
          <Drum />
          <Controller />
        </div>
      </>
    );
  }
}

export default Main;
