import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import {BrowserRouter,Route,Routes, Navigate} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [firstValue,SetValue]=useState("")
  const [searchValue,SetsearchValue]=useState("")
  
  const clickToSubmit=(e)=>{
    e.preventDefault()
    SetsearchValue(firstValue);
    SetValue("");
   
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar firstValue={firstValue} clickToSubmit={clickToSubmit} setFirstValue={((v)=>{SetValue(v)})}/>
      <Routes>
        <Route path='/' element={<Home firstValue={searchValue} />}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
 