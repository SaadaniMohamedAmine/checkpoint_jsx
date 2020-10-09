import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
//import imageInPublic from '../public/imageInPublic.jpg'
import imageInSrc from './imageInSrc.jpg'
//import myVideo from '/myVideo.mp4'

function App() {
  return (
        <React.Fragment>
    <div className="cont">
       <div style={{border:"1px solid black",maxWidth:"100vw"}} className="div">
         <h1 className="title red">Your name here :</h1>
         <img src={imageInSrc} alt="image in src" className="img"/>
         <img src={process.env.PUBLIC_URL + "/imageInPublic.jpg"} alt="mypic" className="img"/>
       </div>
       <video style={{width:"320px",height:"240px"}} controls className="video" poster="./logo512.png">
         <source src={process.env.PUBLIC_URL + "/myVideo.mp4"} />
       </video>
   </div>
    </React.Fragment>
    
  )
}

export default App;
