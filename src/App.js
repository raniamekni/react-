import "./App.css";
import React from "react";
import image1 from "./imageInSrc.jpg";
import myVideo from "./myVideo.mp4";

function App() {
  return (
    <div className='wel'>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title ">workshop React</h1>
        <br />
        <img src={image1} alt="imagesrc" />
        <br />
        <img
          width={320}
          height={240}
          controls
          src="./imageInPublic.png"
          alt="imagepub"
        />
      </div>
      <center>
      <video width={320} height={240} controls>
        <source className='myVid' src={myVideo} type="video/mp4" />
      </video>
      </center>
    </div>
  );
}

export default App;
