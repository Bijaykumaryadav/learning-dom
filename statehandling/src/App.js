import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import btnModule from "./Button.module.css";
// import { questions } from "./Data/faqQuestion";
import Faqs from "./faqs";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function App() {
  // let [showAns, setShowAns] = useState(questions[0].qno);
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalstatus, setModalstatus] = useState(false);
  let showNotification = () => {
    // NotificationManager.info("Welcome to bijays world ");
    // NotificationManager.success("Success message", "Title here");
    // NotificationManager.warning("Warning message", "Close after 3000ms", 500);
    // NotificationManager.error("Error message", "Click me!", 500);
  };

  return (
    <div className="App">
      <NotificationContainer />
      <button onClick={showNotification}>Save</button>
      <div>
        <Faqs />
        {/* method-1 for showing faq */}
        {/* <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="faqouter">
          {questions.map((faqItems, i) => {
            return (
              <div className="faqItems" key={faqItems.qno}}>
                <h2 onClick={() => setShowAns(faqItems.qno)}>
                  {faqItems.question}
                </h2>
                <p className={showAns === faqItems.qno ? "activeAns" : ""}>
                  {faqItems.answer}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
      <button className="en" onClick={() => setModalstatus(true)}>
        Enquiry Now
      </button>
      <div
        onClick={() => setModalstatus(false)}
        className={`modalOverLay ${modalstatus ? "modalShow" : ""}`}
      ></div>
      <div className={`ModalDiv ${modalstatus ? "showModalDiv" : ""}`}>
        <h3>
          Enquiry Now <span onClick={() => setModalstatus(false)}>&times;</span>
        </h3>
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
