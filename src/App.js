import "./App.css";
import ChangeColor from "./components/ChangeColor";
import ChangeLenguage from "./components/ChangeLanguage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <ChangeLenguage />
      <Profile />
      <Login />
      <Logout />
      <ChangeColor />
    </div>
  );
}

export default App;
