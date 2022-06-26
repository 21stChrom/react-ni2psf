import React from "react";
import "./style.css";
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import {BsFillDropletFill} from '@react-icons/all-files/bs/BsFillDropletFill'

export default function App() {
  return (
    <div class="container">
      <h1 className="chico">TIME</h1>
      <audio className="chico" controls>
        <source src="" type="audio/mpeg" />
        </audio>
      <div>
        <canvas className="casva">

        </canvas>
      </div>
      <p className="chico"><span style={{fontWeight: 'bold'}}>{Date()}</span></p>

    <div className="face">
    <div className="first" style={{color: "red"}}>
   <div className="bb" style={{margin: "100px 10px 10px 10px"}} />
   <div  className="Pmack">
     <div><BsFillDropletFill /></div>
    <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span></div>
    </div>
    </div>
    </div>
  <footer className="foot" style={{content: "''"}}>
    HOwdy Nehibor!
  </footer>
  </div>
  );
  }