import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  const language = useSelector((state) => state.language.value);
  return (
    <div style={{ color: themeColor }}>
      {language === "Ingles" ? 
        <h1>Profile Page</h1>: 
        <h1>Página de Perfil</h1>
      }

      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}

export default Profile;
