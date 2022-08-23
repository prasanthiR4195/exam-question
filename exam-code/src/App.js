import "./App.css";
import Card from "./UI/Card";
import Navbar from "./UI/Navbar";
import Question from "./Components/Question";
import Home from "./Components/Home";
import { HashRouter , Route, Routes  } from "react-router-dom";
import Result from "./Components/Result";


function App() {
  return (
    <HashRouter >
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/*"  element={<Home/>} exact/>             //Home page
          <Route path="/question"  element={<Question/>} />      //Questions page
          <Route path="/result"  element={<Result/>} />         //results showing page
        </Routes>
      </div>
    </HashRouter >
  );
}

export default App;
