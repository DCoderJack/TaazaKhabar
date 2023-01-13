import './App.css';
import './Components/CSS/style.css'
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [progressBar, setprogressBar] = useState(0)

  const apiKey = process.env.REACT_APP_TAAZA_KHABAR_API
  const pageSize = 5;

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar 
          height={3}
          color='#f11946'
          progressBar={progressBar}
        />
        <Routes>
          <Route exact path = '/' element={<News setprogressBar = {setprogressBar} apiKey = {apiKey} country = {'in'} category = {'general'} pageSize = {pageSize} key = {'general'}/>}/>
          <Route exact path = '/home' element={<News apiKey = {apiKey} country = {'in'} category = {'general'} pageSize = {pageSize} key = {'general'} setprogressBar = {setprogressBar}/>}/>
          <Route exact path = '/science' element={<News apiKey = {apiKey} country = {'in'} category = {'science'} pageSize = {pageSize} key = {'science'} setprogressBar = {setprogressBar}/>}/>
          <Route exact path = '/sports' element={<News apiKey = {apiKey} country = {'in'} category = {'sports'} pageSize = {pageSize} key = {'sports'} setprogressBar = {setprogressBar}/>}/>
          <Route exact path = '/business' element={<News apiKey = {apiKey} country = {'in'} category = {'business'} pageSize = {pageSize} key = {'business'} setprogressBar = {setprogressBar}/>}/>
          <Route exact path = '/health' element={<News apiKey = {apiKey} country = {'in'} category = {'health'} pageSize = {pageSize} key = {'health'} setprogressBar = {setprogressBar}/>}/>
          <Route exact path = '/technology' element={<News apiKey = {apiKey} country = {'in'} category = {'technology'} pageSize = {pageSize} key = {'technology'} setprogressBar = {setprogressBar}/>}/>
          <Route exact path = '/entertainment' element={<News apiKey = {apiKey} country = {'in'} category = {'entertainment'} pageSize = {pageSize} key = {'entertainment'} setprogressBar = {setprogressBar}/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
