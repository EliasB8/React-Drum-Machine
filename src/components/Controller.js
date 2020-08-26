import React from "react";
import ToggleButton from "./ToggleButton";

function Controller(props) {
  return (
    <div className="controller-container">
      <ToggleButton
        name="power"
        checked={false}
        label="Power"
        state1="on"
        state2="off"
      />
      <div id="bank-display" className="bank-display"></div>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={props.volume}
          class="slider"
          id="myRange"
        />
      </div>
      <ToggleButton
        name="bank"
        checked={true}
        label="Bank"
        state1="HT"
        state2="SPK"
      />
    </div>
  );
}

export default Controller;
