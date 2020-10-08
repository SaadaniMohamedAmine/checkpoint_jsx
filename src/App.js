import React from 'react';
import logo from './logo.svg';
import './App.css';
import imgSrc from './imageInSrc.jpg'
import imgPub from  "/imageInPublic.PNG"
import video from '/myVideo.mp4.mp4'

function App() {
  return (
    <>
       <div style={{border:"1px solid black",maxWidth:"100vw"}}>
         <h1 className="title red">Your name here</h1>
         <img src={imgSrc} alt="image in src" />
         <img src={imgPub} alt="image in public" />
       </div>
       <video style={{width:"320",height:"240"}} controls>
         <source src={video} type="video/mp4" />
       </video>
    </>
    
  )
}

export default App;
