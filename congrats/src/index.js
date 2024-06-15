// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import * as React from "react";
import { createRoot } from "react-dom/client";
import ConfettiExplosion from "react-confetti-explosion";

const container = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: "#000000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const button = {
  padding: "20px 40px",
  color: "black",
  backgroundColor: "#FFBFF0",
  fontFamily: "Helvetica Neue",
  textTransform: "uppercase",
  letterSpacing: 1,
  fontWeight: "bold",
  border: "2px solid white",
  borderRadius: 4,
  boxShadow: "0 0 20px black",
  cursor: "pointer",
  marginTop: "20px"
};

const text = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "24px",
  textAlign: "center"
};

const source = {
  position: "absolute",
  right: "50%",
  left: "50%",
  bottom: 50
};

const bigExplodeProps = {
  force: 0.6,
  duration: 5000,
  particleCount: 200,
  floorHeight: 1600,
  floorWidth: 1600
};

function Button() {
  const [isExploding, setIsExploding] = React.useState(false);
  
  return (
    <div style={container}>
      <div style={text}>
        Congrats on your graduation! Click "Congrats" to see confetti.
      </div>
      <button
        type="button"
        onClick={() => setIsExploding(!isExploding)}
        style={button}
      >
        {isExploding && (
          <div style={source}>
            <ConfettiExplosion {...bigExplodeProps}/>
          </div>
        )}
        Congrats!
      </button>
    </div>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<Button />);
