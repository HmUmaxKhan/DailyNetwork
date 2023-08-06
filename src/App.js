import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';




function App() {

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<News key='general' countryCode='in' category="general"/>}/>
      <Route exact path="/business" element={<News key='business' countryCode='in' category="business"/>}/>
      <Route exact path="/health" element={<News key='health' countryCode='in' category="health"/>}/>
      <Route exact path="/science" element={<News key='science' countryCode='in' category="science"/>}/>
      <Route exact path="/sports" element={<News key='sports' countryCode='in' category="sports"/>}/>
      <Route exact path="/entertainment" element={<News key='entertainment' countryCode='in' category="entertainment"/>}/>
      <Route exact path="/technology" element={<News key='technology' countryCode='in' category="technology"/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
