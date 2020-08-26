import React from "react";

function ToggleButton(props) {
  return (
    <div className="toggles">
      <label className="controller-labels">{props.label}</label>
      <div class="mid">
        <label class="rocker">
          <input type="checkbox" name={props.name} checked={props.checked} />

          {props.label === "Bank" ? (
            <span class="switch-left" style={{ backgroundColor: "#fddb3a" }}>
              {props.state1}
            </span>
          ) : (
            <span class="switch-left">{props.state1}</span>
          )}

          {props.label === "Bank" ? (
            <span class="switch-right" style={{ backgroundColor: "#145374" }}>
              {props.state2}
            </span>
          ) : (
            <span class="switch-right">{props.state2}</span>
          )}
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
