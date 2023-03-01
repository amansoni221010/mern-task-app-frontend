// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';


import React from "react";


import Home from './MyComponents/home/Home';
import { Box } from '@mui/system';
import DataProvider from './context/DataProvider';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailVeiw from './MyComponents/details/DetailVeiw';
import Footer from './MyComponents/Footer';


function App() {




  return (
    <>

<DataProvider>
<BrowserRouter>


    <Header/>
    <Box>


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<DetailVeiw/>}/>
        </Routes>
    </Box>
  
   <Footer/>
   

 
    

</BrowserRouter>
</DataProvider>
    
   
  
    </>

  );
}

export default App;
