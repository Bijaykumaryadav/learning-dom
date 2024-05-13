import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import btnModule from "./Button.module.css";

function App() {
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalstatus, setModalstatus] = useState(false);

  return (
    <div className="App">
      <button className="bg-[red] p-[10px] mr-4">Add Data</button>
      <button className="en" onClick={() => setModalstatus(!modalstatus)}>
        Enquiry Now
      </button>
      <div className={`modalOverLay ${modalstatus ? "modalShow" : ""}`}></div>
      <div className={`ModalDiv ${modalstatus ? "showModalDiv" : ""}`}>
        <h3>Enquiry Now</h3>
      </div>
      <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      {/* note : if we are using interpolation then we can use for conditional works also */}
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact us</li>
        </ul>
      </div>
      <input type={pstatus ? "text" : "password"} />
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>
      <br />
      {/* note if we using the filename like filename.module.css like this then we should use curly braces under which not a classname  from css passes it should be a variable name of the css that had been imported along with dot opertor and className*/}
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
      <button onClick={() => setStatus(!status)}>
        {status ? "Hide" : "Show"}
      </button>
      {status ? <p className="para">Hi, this is bijay</p> : ""}
    </div>
  );
}

export default App;
