import React from "react";

function ToggleButton(props) {
  return (
    <div className="toggles">
      <label className="controller-labels">{props.label}</label>
      <div className="mid">
        <label className="rocker">
          <input
            type="checkbox"
            name={props.name}
            checked={props.checked}
            onClick={props.handler}
            disabled={props.label === "Bank" ? props.disabled : false}
          />

          {props.label === "Bank" ? (
            <span
              className="switch-left"
              style={{ backgroundColor: "#fddb3a" }}
            >
              {props.state1}
            </span>
          ) : (
            <span className="switch-left">{props.state1}</span>
          )}

          {props.label === "Bank" ? (
            <span
              className="switch-right"
              style={{ backgroundColor: "#145374" }}
            >
              {props.state2}
            </span>
          ) : (
            <span className="switch-right">{props.state2}</span>
          )}
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
