import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import './App.css';

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
  backgroundColor: "#FFBF00",
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
  // position: "absolute",
  // right: "50%",
  // left: "50%",
  // bottom: 50
  position: "absolute",
  left: "50%",
  bottom: 50,
  transform: "translateX(-50%)"
};

const clickCountText = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "20px",
  textAlign: "center",
  marginTop: "20px"
};

const bigExplodeProps = {
  force: 0.6,
  duration: 5000,
  particleCount: 200,
  floorHeight: 1600,
  floorWidth: 1600
};

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsExploding(true);
    setClickCount(clickCount + 1);
  };

  return (
    <div style={container}>
      <div style={text}>
        Congrats on your graduation! Click "Congrats" to see confetti.
      </div>
      <button
        type="button"
        onClick={handleClick}
        style={button}
      >
        {isExploding && (
          <div style={source}>
            <ConfettiExplosion {...bigExplodeProps} />
          </div>
        )}
        Congrats!
      </button>
      <div style={clickCountText}>
        Click: {clickCount} {clickCount === 1 ? "time" : "times"}
      </div>
    </div>
  );
}

export default App;
