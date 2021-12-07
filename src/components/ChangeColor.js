import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../redux/slices/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change color
      </button>
    </div>
  );
}

export default ChangeColor;
