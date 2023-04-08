import { useEffect, useRef, useState } from "react";
import "./App.css";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const activeStyle = {
  boxShadow: `inset 0.5rem 0.5rem 0.5rem rgb(0 0 0 / 33%),
  inset -0.5rem -0.5rem 0.5rem rgb(255 255 255 / 33%)`,
};

const inactiveStyle = {
  boxShadow: `inset 0.5rem 0.5rem 0.5rem rgb(255 255 255 / 33%),
    inset -0.5rem -0.5rem 0.5rem rgb(0 0 0 / 33%)`,
};

const DrumPad = ({
  id,
  keyTrigger,
  url,
  handleDisplay,
  power,
  clipVolume,
  ...props
}) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);
  const inputEl = useRef(null);
  const playSound = () => {
    const element = inputEl.current;
    if (element !== null && power) {
      element.volume = clipVolume / 100;
      element.currentTime = 0;
      element.play();
      handleDisplay(id);
      setPadStyle(activeStyle);
      setTimeout(() => {
        console.log("inactiveStyle");
        setPadStyle(inactiveStyle);
      }, 100);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clipVolume, power]);

  return (
    <div style={padStyle} id={id} className="drum-pad" onClick={playSound}>
      <audio className="clip" ref={inputEl} id={keyTrigger} src={url}></audio>
      {keyTrigger}
    </div>
  );
};

function App() {
  const [controls, setControls] = useState({
    clipVolume: 100,
    currentPadBank: bankOne,
    power: true,
    updateDisplay: "",
  });

  const sliderStyle = {
    background:
      "linear-gradient(to right, var(--primary-main), var(--primary-main) " +
      controls.clipVolume +
      "%, var(--primary-dark) " +
      controls.clipVolume +
      "%, var(--primary-dark))",
  };
  const handlePowerChange = (e) => {
    setControls((prevControls) => ({
      ...prevControls,
      power: e.target.checked,
      updateDisplay: "",
    }));
  };
  const handleBankChange = (e) => {
    setControls((prevControls) => ({
      ...prevControls,
      currentPadBank: e.target.checked ? bankOne : bankTwo,
      updateDisplay: e.target.checked ? "Heater Kit" : "Smooth Piano Kit",
    }));
  };
  /* const handleDisplayChange = useCallback((newDisplay) => {
    setControls((prevControls) => {
      return { ...prevControls, updateDisplay: newDisplay };
    });
  }, []); */
  const handleDisplayChange = (newDisplay) => {
    setControls((prevControls) => ({
      ...prevControls,
      updateDisplay: newDisplay,
    }));
  };
  const handleSliderChange = (e) => {
    if (controls.power) {
      setControls((prevControls) => ({
        ...prevControls,
        clipVolume: Number(e.target.value),
        updateDisplay: `Volumen: ${e.target.value}`,
      }));
      setTimeout(() => {
        handleDisplayChange("");
      }, 1000);
    }
  };

  /* useEffect(() => {
    console.log("new", controls);
  }, [controls]); */

  return (
    <div className="container" id="drum-machine">
      <div className="flex-responsive">
        <div className="flex-responsive-item">
          <header className="header">
            <h1>Drum Machine</h1>
            <span>by JohnApCo</span>
          </header>
          <div className="control-group">
            <div>Power</div>
            <div className="switch">
              <label htmlFor="power">
                <input
                  type="checkbox"
                  name="power"
                  id="power"
                  onChange={handlePowerChange}
                  defaultChecked={controls.power}
                />

                <span className="switch__slider round"></span>
              </label>
            </div>
            <p id="display" className="control__display">
              {controls.updateDisplay}
            </p>
            <input
              style={sliderStyle}
              type="range"
              value={controls.clipVolume}
              onChange={handleSliderChange}
              min={0}
              max={100}
              className="slider"
              id="myRange"
            ></input>
            <div>Bank</div>
            <div className="switch">
              <label htmlFor="bank">
                <input
                  type="checkbox"
                  name="bank"
                  id="bank"
                  onChange={handleBankChange}
                  defaultChecked={controls.currentPadBank === bankOne}
                />
                <span className="switch__slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex-responsive-item">
          <div className="pad-bank">
            {controls.currentPadBank.map((el) => (
              <DrumPad
                id={el.id}
                key={el.keyTrigger + el.id}
                keyTrigger={el.keyTrigger}
                url={controls.power ? el.url : "#"}
                handleDisplay={handleDisplayChange}
                power={controls.power}
                clipVolume={controls.clipVolume}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
