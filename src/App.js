import React, {useState} from 'react';
import Feedback from './Feedback';
import ThankYou from './ThankYou'
import { Routes, Route, Outlet, Link } from "react-router-dom";

//state held here.


function App() {

  const [activeRating, setActiveRating] = useState('')

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={
        <Feedback
         activeRating={activeRating}
         setActiveRating={setActiveRating}
          />} />
        <Route path="thankyou" element={<ThankYou activeRating={activeRating}/>} />
      </Routes>
    </div>
  );
}

export default App;
