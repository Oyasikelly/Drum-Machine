import React from "react";

export default function Pads({ clicked, currentBank, playSound }) {
  return (
    <div className="pads">
      {currentBank.map((pad) => (
        <div
          key={pad.key}
          id={pad.id}
          className={`drum-pad ${pad.key == clicked ? "active_pad" : ""}`}
          //   style={{ backgroundColor: "orange" }}
          onClick={() => playSound(pad.key)}
        >
          {pad.key}
          <audio className="clip" id={pad.key} src={pad.src}></audio>
        </div>
      ))}
    </div>
  );
}
