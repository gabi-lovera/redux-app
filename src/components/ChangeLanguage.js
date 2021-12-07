import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../redux/slices/language";

function ChangeLanguage() {
  const dispatch = useDispatch();
  return (
    <div>
      <select onChange={(e) => dispatch(changeLanguage(e.target.value))}>
        <option>Ingles</option>
        <option>Español</option>
      </select>
    </div>
  );
}

export default ChangeLanguage;
