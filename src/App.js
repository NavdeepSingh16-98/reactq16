import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import useToken from './components/Login/hook/useToken';


import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
 return (
  <>
   <Router>
     
     <Header/>
     <Routes >
          <Route  path="/todo" element={<Todo />} />
      
        
          {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
        </Routes>
     </Router>   
     </>
   
 );
}
export default App;