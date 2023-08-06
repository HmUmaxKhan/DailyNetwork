import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {

  const  [apikey] = useState(process.env.REACT_APP_API_KEY)
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<News key='general' apikey={apikey} countryCode='in' category="general"/>}/>
      <Route exact path="/business" element={<News key='business' apikey={apikey} countryCode='in' category="business"/>}/>
      <Route exact path="/health" element={<News key='health' apikey={apikey} countryCode='in' category="health"/>}/>
      <Route exact path="/science" element={<News key='science' apikey={apikey} countryCode='in' category="science"/>}/>
      <Route exact path="/sports" element={<News key='sports' apikey={apikey} countryCode='in' category="sports"/>}/>
      <Route exact path="/entertainment" element={<News key='entertainment' apikey={apikey} countryCode='in' category="entertainment"/>}/>
      <Route exact path="/technology" element={<News key='technology' apikey={apikey} countryCode='in' category="technology"/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
