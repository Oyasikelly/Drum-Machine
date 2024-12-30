import React from "react";
import "../Power.scss";

export default function Power({ power, setPower }) {
  return (
    <div className="power-switch">
      <span className="switch-label">Power</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={power}
          onChange={() => setPower(!power)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
