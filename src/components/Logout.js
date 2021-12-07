import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/user";

function Logout() {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value);
  const language = useSelector((state) => state.language.value);
  return (
    <div>
      <button
        style={{ color: themeColor }}
        onClick={() => {
          dispatch(logout());
        }}
      >
        {language === "Ingles" ? <>Logout</> : <>Salir</>}
      </button>
    </div>
  );
}

export default Logout;
