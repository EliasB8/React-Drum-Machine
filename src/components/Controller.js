import React from "react";
import ToggleButton from "./ToggleButton";

function Controller(props) {
  function handleChange(event) {
    props.handleVolume(event.target.value);
  }
  return (
    <div className="controller-container">
      <ToggleButton
        name="power"
        checked={props.power}
        label="Power"
        state1="on"
        state2="off"
        handler={props.handlePower}
      />
      <div className="bank-display">
        <p id="display" className="display-text">
          {props.display}
        </p>
      </div>
      <div className="slidecontainer">
        <input
          type="range"
          min="0"
          step="0.01"
          max="1"
          value={props.volume}
          className="slider"
          id="myRange"
          onChange={handleChange}
          disabled={props.disabled}
        />
      </div>
      <ToggleButton
        name="bank"
        checked={props.bankHK}
        handler={props.handleBank}
        label="Bank"
        state1="HK"
        state2="SPK"
        disabled={props.disabled}
      />
    </div>
  );
}

export default Controller;
