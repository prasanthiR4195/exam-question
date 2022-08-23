import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_wrap">
      <h1>Welcome to the Test</h1>
      <p>Click to start the test</p>
      <Link  to="/question">
        <Button >Start</Button>
      </Link>
      
    </div>
  );
};

export default Home;
