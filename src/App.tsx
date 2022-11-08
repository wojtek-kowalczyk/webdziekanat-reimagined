import React from 'react';
import './App.css';
import Button from '@mui/material/Button'
import { Link, Route, Routes } from "react-router-dom"
import SignIn from './components/signin';

function Test2() {
  return (
    <div>
      <p className='test123'>DZIEN DOBRY TEST</p>
      <Button>TEST BUTTON 2</Button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className='header'>
        <Routes>
          <Route path='/1' element={<SignIn />} />
          <Route path='/2' element={<Test2 />} />
        </Routes>
      </div>
      <div className='content'>
        <Link to={"/1"}>
          <Button>GO to 1</Button>
        </Link>
        <Link to={"/2"}>
          <Button>GO to 2</Button>
        </Link>
      </div>
    </>
  );
}

export default App;
