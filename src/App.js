import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import React from "react";
import Home from "./pages/Home";


function App() {
  return (
    <>

        <Router>
            <Navbar></Navbar>
            <Routes>

                <Route exact path="/" component={Home} />

            </Routes>


        </Router>

    </>
  );
}

export default App;
