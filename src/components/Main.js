import React from "react";
import Drum from "./Drum";
import Controller from "./Controller";
import { keys } from "../soundsAndKeys";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      volume: 0.6,
      bankHK: true,
      activeKey: "",
      disabledController: false
    };
    this.handlePower = this.handlePower.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyClick = this.handleKeyClick.bind(this);
    this.handleVolumeLevel = this.handleVolumeLevel.bind(this);
  }

  componentDidMount() {
    document.querySelectorAll(".drum-pad").forEach((item) => {
      item.addEventListener("click", (event) => {
        this.handleKeyClick(event.target.innerText);
      });
    });

    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.querySelectorAll(".drum-pad").forEach((item) => {
      item.removeEventListener("click", (event) => {
        this.handleKeyClick(event.target.innerText);
      });
    });

    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyClick(keypad) {
    this.playSounds(keypad);
    this.setState({
      activeKey: keypad
    });
  }

  handleKeyPress(event) {
    const keypad = String.fromCharCode(event.keyCode);
    this.setState({
      activeKey: keypad.toUpperCase()
    });
    keys.allKeys.forEach((element) => {
      if (keypad === element || keypad.toUpperCase() === element) {
        console.log(element);
        this.playSounds(element);
      }
    });
  }

  playSounds(item) {
    if (this.state.power) {
      document.getElementById(item).play();
      this.handleDisplay(
        document.getElementById(item).parentElement.id.split("-").join(" ")
      );
    }
  }

  handlePower() {
    this.setState((state) => ({
      power: !state.power,
      disabledController: !state.disabledController
    }));
    const powerStatus = !this.state.power ? "ON" : "OFF";
    this.handleDisplay("Power : " + powerStatus);
  }
  handleDisplay(text) {
    this.setState({
      display: text
    });
  }

  handleVolume(level) {
    this.setState({
      volume: level
    });
    this.handleVolumeLevel();
  }

  handleVolumeLevel() {
    const Audios = document.getElementsByTagName("AUDIO");
    for (let i = 0; i < Audios.length; i++) {
      Audios[i].volume = this.state.volume;
    }
    this.handleDisplay("Volume : " + Math.floor(this.state.volume * 100));
  }

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
