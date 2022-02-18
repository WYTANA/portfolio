import React from "react"
import Footer from "./components/Footer"

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Travis L Orback</h3>
        <ul className="List-items">
          <li>About</li>
          <li>
            Github
          </li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </header>
      <div className="Container">
        <div className="Left-container">
          <div className="Portfolio">Project 1</div>
          <div className="Portfolio">Project 2</div>
          <div className="Portfolio">Project 3</div>
          <div className="Portfolio">Project 4</div>
        </div>
        <div className="Right-container">
          <p>This is the right container. Talk about my accomplishments and goals. What am I looking for?</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
