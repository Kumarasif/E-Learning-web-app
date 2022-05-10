// import './App.css';
// import LOGO from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <h1>Kavin Kumar @ CRYSTAL DELTA</h1>
//       {/* <img src={LOGO} alt="just a react logo"/> */}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import ReactDOM from "react-dom";

import LOGO from './logo.png';

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "ghjk",
      password: "007"
    },
    {
      username: "zxcv",
      password: "477"
    },
    {
      username: "lkjh",
      password: "981"
    },
    {
      username: "asdf",
      password: "1234"

    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Customer ID </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">
            Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <img src={LOGO} className="logo1" alt="logo"></img>
      <div className="welcome">
        <h1>
          Welcome to
          <br></br><div className="crystal">Crystal Delta   </div>
          e-learning    
        </h1>
      </div>
      <div className="login-form">
        <div className="title">Login to your account</div>
        {isSubmitted ? <div>User have successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

