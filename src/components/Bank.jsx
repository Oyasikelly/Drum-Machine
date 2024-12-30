import React from "react";
import "../Bank.scss";

export default function Bank({
  currentBank,
  setCurrentBank,
  bankOne,
  bankTwo,
}) {
  return (
    <div className="bank-switch">
      <span className="switch-label">Bank</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={currentBank === bankTwo}
          onChange={() =>
            setCurrentBank(currentBank === bankOne ? bankTwo : bankOne)
          }
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
