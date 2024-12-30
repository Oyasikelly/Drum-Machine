import React, { useState } from "react";
import "../Volume.scss";

export default function Volume({ volume, setVolume }) {
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e) => {
    const slider = e.target.closest(".custom-slider");
    const rect = slider.getBoundingClientRect();
    const newVolume = Math.min(
      Math.max((e.clientX - rect.left) / rect.width, 0),
      1
    );
    setVolume(newVolume);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    handleDrag(e);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      handleDrag(e);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="volume-control"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <label className="volume-label">Volume</label>
      <div className="custom-slider" onMouseDown={handleMouseDown}>
        <div
          className="slider-track"
          style={{ width: `${volume * 100}%` }}
        ></div>
        <div
          className="slider-handle"
          style={{ left: `${volume * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
