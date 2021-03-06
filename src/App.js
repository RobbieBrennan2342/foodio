import React from "react";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/UI/Card";
import MobileNavBar from "./components/mobile/MobileNavBar";
function App() {
  return (
    <Router>
      <div className="App">
        <Card>
          <Navbar />
          <div>
            <h1>Hello World</h1>
          </div>
        </Card>
      </div>
      <MobileNavBar />
    </Router>
  );
}

export default App;
