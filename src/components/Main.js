import React from "react";
import Drum from "./Drum";
import Controller from "./Controller";
import { keys } from "../soundsAndKeys";

class Main extends React.Component {
  constructor(props) {
    super(props);

    // Initial states
    this.state = {
      power: true,
      display: "",
      volume: 0.6,
      bankHK: true,
      activeKey: "",
      disabledController: false
    };

    // binding functions to use state
    this.handlePower = this.handlePower.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyClick = this.handleKeyClick.bind(this);
    this.handleVolumeLevel = this.handleVolumeLevel.bind(this);
  }

  // adding keypress and click event listeners on mount
  componentDidMount() {
    document.querySelectorAll(".drum-pad").forEach((item) => {
      item.addEventListener("click", (event) => {
        this.handleKeyClick(event.target.innerText);
      });
    });

    document.addEventListener("keypress", this.handleKeyPress);
  }

  // removing keypress and click event listeners on unmount
  componentWillUnmount() {
    document.querySelectorAll(".drum-pad").forEach((item) => {
      item.removeEventListener("click", (event) => {
        this.handleKeyClick(event.target.innerText);
      });
    });

    document.removeEventListener("keypress", this.handleKeyPress);
  }

  // handling key click event
  handleKeyClick(keypad) {
    this.playSounds(keypad);
    this.setState({
      activeKey: keypad
    });
  }

  // handling key press event
  handleKeyPress(event) {
    const keypad = String.fromCharCode(event.keyCode);
    this.setState({
      activeKey: keypad.toUpperCase()
    });
    keys.allKeys.forEach((element) => {
      if (keypad === element || keypad.toUpperCase() === element) {
        this.playSounds(element);
      }
    });
  }

  // playing sound based on key clicked or pressed and bank type
  // adding drum effect animation when clicked or key pressed
  playSounds(item) {
    if (this.state.power) {
      document.getElementById(item).play();
      const id = document.getElementById(item).parentElement.id;
      document.getElementById(id).classList.add("drum-pad-animate");
      setTimeout(() => {
        document.getElementById(id).classList.remove("drum-pad-animate");
      }, 300);
      this.handleDisplay(id.split("-").join(" "));
    }
  }

  // turn power on or off
  handlePower() {
    this.setState((state) => ({
      power: !state.power,
      disabledController: !state.disabledController
    }));
    const powerStatus = !this.state.power ? "ON" : "OFF";
    this.handleDisplay("Power : " + powerStatus);
  }

  // displaying current user interaction information
  handleDisplay(text) {
    this.setState({
      display: text
    });
  }

  // setting volume in state
  handleVolume(level) {
    this.setState({
      volume: level
    });
    this.handleVolumeLevel();
  }

  // affecting the volume of the audios
  handleVolumeLevel() {
    const Audios = document.getElementsByTagName("AUDIO");
    for (let i = 0; i < Audios.length; i++) {
      Audios[i].volume = this.state.volume;
    }
    this.handleDisplay("Volume : " + Math.floor(this.state.volume * 100));
  }

  // changing bank
  handleBank() {
    this.setState((state) => ({
      bankHK: !state.bankHK
    }));
    const bankName = !this.state.bankHK ? "Heater Kit" : "Smooth Piano Kit";
    this.handleDisplay(bankName);
  }

  render() {
    return (
      <>
        <div id="drum-machine" className="drum-machine-container">
          <Drum
            bank={this.state.bankHK}
            power={this.state.power}
            volume={this.state.volume}
          />
          <Controller
            disabled={this.state.disabledController}
            volume={this.state.volume}
            power={this.state.power}
            display={this.state.display}
            bankHK={this.state.bankHK}
            handlePower={this.handlePower}
            handleBank={this.handleBank}
            handleVolume={this.handleVolume}
          />
        </div>
      </>
    );
  }
}

export default Main;
