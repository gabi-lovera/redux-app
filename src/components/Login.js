import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/user";

function Login() {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value);
  const language = useSelector((state) => state.language.value);
  return (
    <div>
      <button
        style={{ color: themeColor }}
        onClick={() => {
          dispatch(login({ name: "Gabi", age: 25, email: "gabi@gmail.com" }));
        }}
      >
        {language === "Ingles" ? <>Login</> : <>Entrar</>}
      </button>
    </div>
  );
}

export default Login;
