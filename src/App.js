import "./App.css";
import Navbar from "./components/Nav/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import DbOne from "./components/Dashboard/DbOne.js";
import DbTwo from "./components/Dashboard/DbTwo.js";
import DbThree from "./components/Dashboard/DbThree.js";
import DbFour from "./components/Dashboard/DbFour.js";
import DbFive from "./components/Dashboard/DbFive.js";
import DbSix from "./components/Dashboard/DbSix.js";
import Kreator from "./components/Creator/Creator.js";

function App() {
  return (
    <div className="App">
      <Router basename="/web-infiz-group-5">
        <div className="overflow-y-hidden">
          <Navbar />
        </div>
          <div className="ml-3 h-screen overflow-y-hidden">
            <Routes>
              <Route exact path="/*" element={<Home />}></Route>
              <Route exact path="/one" element={<DbOne />}></Route>
              <Route exact path="/two" element={<DbTwo />}></Route>
              <Route exact path="/three" element={<DbThree />}></Route>
              <Route exact path="/four" element={<DbFour />}></Route>
              <Route exact path="/five" element={<DbFive />}></Route>
              <Route exact path="/six" element={<DbSix />}></Route>
              <Route exact path="/kreator" element={<Kreator />}></Route>
            </Routes>
            </div>
      </Router>
    </div>
  );
}

export default App;
