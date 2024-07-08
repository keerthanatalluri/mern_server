/**import react,{useState,useaReducer,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import TodoList1 from "./TodoList1";
//import Example from "./Example"
//import Feedback from '../components/Feedback';
//import  './index.css';
import Login1 from "./Login1";
import Register from './Register';
import {BrowserRouter as Router,Routes,
  Link,
  Route } from "react-router-dom";
const root=document.getElementById('root')
const VirtualRoot=ReactDOM.createRoot(root);
//function Component(){
  //  const array=["Ravi","Raju","Ram"]
  //  const [Name,Change]=useState(0)
    //function ChangeName(){
       // Change(Name+1)

 //   }
   // return(
     //   <div>
       //     <h1>Name:{array[Name]}</h1>
         //   <button onClick={ChangeName}>Click Me</button>
        //</div>
    //)
//}
VirtualRoot.render(
  <Router>
 <div>
  <TodoList1/>
 <Header/>
 </div>
 <Routes>
 <Route path="/login1" element={<Login1/>} />
 <Route path="/register" element={<Register/>}/>
 </Routes>
 </Router>
);**/
/**import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Link ,Router,Navbar,Routes,Route} from 'react';
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <route path="/register" element={<h1>Register</h1>}/>
          <route path="/login" element={<h1>login</h1>}/>
          <route path="/logout" element={<h1>logout</h1>}/>
        </Routes>
    </Router>
      <h1>Client</h1>
    </div>
);**/
import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './input.css'; 
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './Register'; 
import Login from './Login';
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(  <div> 
  <Router> 
      <Navbar/> 
    <Routes> 
      <Route path="/about" element={<h1>About</h1>}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/>
    </Routes> 
  </Router> 
   
 </div> 
);