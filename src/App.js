import React from "react";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/UI/Card";
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
    </Router>
  );
}

export default App;
