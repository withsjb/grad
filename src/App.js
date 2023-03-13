import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Mainpage from "./pages/mainpage";
import Navbar from "./component/Navbar";
import Slidemain from "./component/Slidemain";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
          <Route path="/header" element={<Navbar />}></Route>
          <Route path="/slidemain" element={<Slidemain />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
