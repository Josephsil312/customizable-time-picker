import React from 'react';
import './App.css'
  
const App = () => {
  
  return (
   <div className = 'App'>
      
      <input type="time" className = 'time'
       min="01:00" max="12:00" required/>
       
    </div>
  );
}
  
export default App;