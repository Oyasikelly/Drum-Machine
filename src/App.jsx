import React, { useState, useEffect } from "react";
import "./App.scss";

// components
import Pads from "./components/Pads";
import Power from "./components/Power";
import Bank from "./components/Bank";
import Volume from "./components/Volume";

const bankOne = [
  {
    id: "Chord-1",
    key: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    id: "Chord-2",
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    id: "Chord-3",
    key: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    id: "Shaker",
    key: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    id: "Open-HH",
    key: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    id: "Closed-HH",
    key: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    id: "Punchy-Kick",
    key: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    id: "Side-Stick",
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    id: "Snare",
    key: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const bankTwo = [
  {
    id: "Heater-1",
    key: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "Heater-2",
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "Heater-3",
    key: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "Clap",
    key: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Clap.mp3",
  },
  {
    id: "Open-HH",
    key: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "Kick-n'-Hat",
    key: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "Kick",
    key: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "Side-Stick",
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    id: "Snare",
    key: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const App = () => {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentBank, setCurrentBank] = useState(bankOne);
  const [clicked, setClicked] = useState();

  const playSound = (key) => {
    if (!power) return;

    const audio = document.getElementById(key);
    if (audio) {
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      const pad = currentBank.find((p) => p.key === key);
      setDisplay(pad ? pad.id : "");
      setClicked(pad.key === key ? key : null);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      playSound(key);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [power, volume, currentBank]);

  return (
    <div id="drum-machine">
      <div>
        {/* Padds */}
        <Pads
          clicked={clicked}
          currentBank={currentBank}
          playSound={playSound}
        />
      </div>
      {/* Controls, power, bank and displays */}
      <div className="controls">
        {/* power switch */}
        <Power power={power} setPower={setPower} />
        <div id="display">{power ? display || "Ready!" : "Power Off"}</div>

        {/* volume switch */}
        <Volume volume={volume} setVolume={setVolume} />

        {/* bank switch*/}
        <Bank
          currentBank={currentBank}
          setCurrentBank={setCurrentBank}
          bankOne={bankOne}
          bankTwo={bankTwo}
        />
      </div>
    </div>
  );
};

export default App;
