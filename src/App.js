import React from "react"
import Footer from "./components/Footer"
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { DiCss3, DiJsBadge, DiHtml5, DiReact } from "react-icons/di"
import { SiSolidity } from "react-icons/si";
import { SiIpfs } from "react-icons/si";

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="List-items">
          <li>
            <h2>Travis L Orback</h2>
          </li>
          <li>Skills:</li>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><FaReact /></a>
          </li>
          <li>
            <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><DiJsBadge /></a>
          </li>
          <li>
            <DiHtml5 />
          </li>
          <li>
            <DiCss3 />
          </li>
          <li>
            <a href="https://docs.soliditylang.org/en/v0.8.12/index.html" target="_blank" rel="noreferrer"><SiSolidity /></a>
          </li>
          <li>
            <a href="https://ipfs.io/" target="_blank" rel="noreferrer"><SiIpfs /></a>
          </li>
        </ul>
      </header>
      <div className="Container">
        <div className="Left-container">
          <div className="Portfolio1">
            <div className="Back1-img"></div>
            <div className="Port1-link">
              <a href="https://angry-perlman-59dbe0.netlify.app/" target="_blank" rel="noreferrer">Rainbow Flipper</a>
            </div>
          </div>
          <div className="Portfolio2">
            <div className="Back2-img"></div>
            <div className="Port2-link">
              <a href="https://lucid-kowalevski-47fd22.netlify.app/" target="_blank" rel="noreferrer">Text Editor from Stack</a>
            </div>
          </div>
          <div className="Portfolio3">
            <div className="Back3-img"></div>
            <div className="Port3-link">
              <a href="https://nervous-fermi-75fa67.netlify.app/" target="_blank" rel="noreferrer">Tip Calculator</a>
            </div>
          </div>
          <div className="Portfolio4">
            <div className="Back4-img"></div>
            <div className="Port4-link">
              <a href="https://gifted-feynman-359308.netlify.app/" target="_blank" rel="noreferrer">My Profile Card</a>
            </div>
          </div>
        </div>
        <div className="Right-container">
          <img id="Profile" src="../images/profile.jpg" alt="Travis' profile pic" />
          <ul id="About-list" >
            <li>I'm a Junior Web Developer looking for opportunities in Web 3.0 or blockchain projects</li><br />
            <li>I love to work from home and have a great office setup with privacy</li><br />
            <li>I'm willing to work in a startup</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
