// import Nav from "./Nav/Nav.jsx";
import "./App.css";
import { Outlet } from "react-router-dom"; 

import Stars from "./Screens/Stars/Stars.jsx"

function App() {
  return (
    <div className="App">

      {/* <Stars /> */}
      <Outlet />
    </div>
  );
}

export default App;
