import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({
    position: "static",
  });

  const moveNoButton = () => {
    const button = document.getElementById("no");
    if (!button) return;

    const container = document.querySelector(".buttons");
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    let x = Math.random() * (containerRect.width - buttonRect.width * 5);
    let y = Math.random() * (containerRect.height - buttonRect.height * 5);

    setNoButtonStyle((prev) => ({
      ...prev,
      transform: `translate(${x}px, ${y}px)`,
    }));
  };

return (
  <div className="valentine-container">
    {accepted ? (
      <div className="result">
        <h1>Yeeeeeeey! I knew you'd say yes! ❤️❤️❤️❤️</h1>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHNneTF3a28wanJrazk5aHdkd2pqMHNpbXR4OWRvdHU2ODUxNW9wZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/KA8qBXr6zykcCvrNbi/giphy.gif"
          alt="Happy Gif"
          className="gif"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    ) : (
      <div className="content">
        <h1>Will you be my Valentine? ❤️</h1>
        <img
          src="https://media.giphy.com/media/ZDu3RRJZkp4rzbZ5d1/giphy.gif?cid=ecf05e47rbxpsp9q54od2w5sa7wbpf4xlzqyrrjw1wu5fajc&ep=v1_stickers_related&rid=giphy.gif&ct=s"
          alt="Cute Gif"
          className="gif"
          style={{ maxWidth: "50%", height: "auto" }}
        />
        <div className="buttons">
          <button id="yes" onClick={() => setAccepted(true)}>Yes ❤️</button>
          <button id="no" style={noButtonStyle} onMouseOver={moveNoButton} onTouchStart={moveNoButton}>
            No ? 🥺
          </button>
        </div>
      </div>
    )}
  </div>
);

export default App;
