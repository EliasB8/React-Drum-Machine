import React from "react";
import { heaterKit, smoothPianoKit, keys } from "../soundsAndKeys";

function Drum(props) {
  return (
    <div className="drum-container">
      <div className="key-col">
        <div className="drum-pad" id={props.bank ? "Heater-1" : "Chord-1"}>
          <audio
            className="clip"
            id={keys.col1[0]}
            src={props.bank ? heaterKit.Heater1 : smoothPianoKit.Chord1}
          ></audio>
          {keys.col1[0]}
        </div>
        <div className="drum-pad" id={props.bank ? "Heater-2" : "Chord-2"}>
          <audio
            className="clip"
            id={keys.col1[1]}
            src={props.bank ? heaterKit.Heater2 : smoothPianoKit.Chord2}
          ></audio>
          {keys.col1[1]}
        </div>
        <div className="drum-pad" id={props.bank ? "Heater-3" : "Chord-3"}>
          <audio
            className="clip"
            id={keys.col1[2]}
            src={props.bank ? heaterKit.Heater3 : smoothPianoKit.Chord3}
          ></audio>
          {keys.col1[2]}
        </div>
      </div>
      <div className="key-col">
        <div className="drum-pad" id={props.bank ? "Heater-4" : "Shaker"}>
          <audio
            className="clip"
            id={keys.col2[0]}
            src={props.bank ? heaterKit.Heater4 : smoothPianoKit.Shaker}
          ></audio>
          {keys.col2[0]}
        </div>
        <div className="drum-pad" id={props.bank ? "Clap" : "Open-HH"}>
          <audio
            className="clip"
            id={keys.col2[1]}
            src={props.bank ? heaterKit.Clap : smoothPianoKit.OpenHH}
          ></audio>
          {keys.col2[1]}
        </div>
        <div className="drum-pad" id={props.bank ? "Open-HH" : "Closed-HH"}>
          <audio
            className="clip"
            id={keys.col2[2]}
            src={props.bank ? heaterKit.OpenHH : smoothPianoKit.ClosedHH}
          ></audio>
          {keys.col2[2]}
        </div>
      </div>
      <div className="key-col">
        <div
          className="drum-pad"
          id={props.bank ? "Kick-n'-Hat" : "Punchy-Kick"}
        >
          <audio
            className="clip"
            id={keys.col3[0]}
            src={props.bank ? heaterKit.KicknHat : smoothPianoKit.PunchyKick}
          ></audio>
          {keys.col3[0]}
        </div>
        <div className="drum-pad" id={props.bank ? "Kick" : "Side-Stick"}>
          <audio
            className="clip"
            id={keys.col3[1]}
            src={props.bank ? heaterKit.Kick : smoothPianoKit.SideStick}
          ></audio>
          {keys.col3[1]}
        </div>
        <div className="drum-pad" id={props.bank ? "Closed-HH" : "Snare"}>
          {keys.col3[2]}
          <audio
            className="clip"
            id={keys.col3[2]}
            src={props.bank ? heaterKit.ClosedHH : smoothPianoKit.Snare}
          ></audio>
        </div>
      </div>
    </div>
  );
}

export default Drum;
