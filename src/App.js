import { useEffect, useState } from 'react';
import './App.css';


import Navbar from './Navbar';
import Footer from './Footer'
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from './Data.json';
import Politics from './Pages/Politics';
import Tech from './Pages/Tech';
import Entertainment from './Pages/Entertainment';
import Travel from './Pages/Travel';
import Sports from './Pages/Sports';

function App() {

  // Post's Data From API
  const [postData, setPostdata] = useState(null);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => setPostdata(json))
    setPostdata(Data);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={postData && <Home postData={postData} />} />
          <Route path="/politics" element={postData && <Politics postData={postData} />} />
          <Route path="/tech" element={postData && <Tech postData={postData} />} />
          <Route path="/entertainment" element={postData && <Entertainment postData={postData} />} />

          <Route path="/travel" element={postData && <Travel postData={postData} />} />
          <Route path="/sports" element={postData && <Sports postData={postData} />} />


        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
