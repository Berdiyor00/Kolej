import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import YourComponent from "./Components/YourComponent"
import Home from "./Pages/Header"
import Navbar from "./Navbar/Navbar"
import ArticleDetailComponent from "./Pages/ArticleDetail" // Import ArticleDetailComponent
import Kolej from "./Pages/Kolej"
import Hujjat from './Pages/Hujjat';
import Bitiruvchilar from './Pages/Bitiruvchilar';
import Kasbhunarnizom from './Pages/Kasbhunarnizom';
import Raxbariyat from './Pages/Raxbariyat';
import Oshpaz from './Pages/Oshpaz';
import Svarka from './Pages/Svarka';
import Gaz from './Pages/Gaz';
import Tikuvchi from './Pages/Tikuvchi';
import Dasturchi from './Pages/Dasturchi';
import Tokar from './Pages/Tokar';
import Traktorchi from './Pages/Traktorchi';
import Prava from './Pages/Prava';
import Turarjoy from './Pages/Turarjoy';
import AllNews from './Pages/AllNews';
import Logo from "./assets/logo.jpg";
import { IoIosArrowForward } from "react-icons/io";



function App() {
  const newdate=new Date()
  const year = newdate.getFullYear();
  
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/your-component" element={<YourComponent />} />
        <Route path="/article/:articleId" element={<ArticleDetailComponent />} />
        <Route path='/tarix' element={<Kolej/>}/>
        <Route path='/hujat' element={<Hujjat/>}/>
        <Route path='/bitiruvchilar' element={<Bitiruvchilar/>}/>
        <Route path='/nizom' element={<Kasbhunarnizom/>}/>
        <Route path='/raxbariyat' element={<Raxbariyat/>}/>
        <Route path='/oshpaz' element={<Oshpaz/>}/>
        <Route path='/svarka' element={<Svarka/>}/>
        <Route path='/gaz' element={<Gaz/>}/>
        <Route path='/tikuvchi' element={<Tikuvchi/>}/>
        <Route path='/dasturchi' element={<Dasturchi/>}/>
        <Route path='/tokar' element={<Tokar/>}/>
        <Route path='/traktor' element={<Traktorchi/>}/>
        <Route path='/prava' element={<Prava/>}/>
        <Route path='/turarjoy' element={<Turarjoy/>}/>
        <Route path='/news' element={<AllNews/>}/>
      </Routes>
      <footer className='w-[100%] h-[350px] bg-[#031f1f55] mt-[70px] text-[#fff] pt-[30px]  '>
                <div className="container">
                  <div className="flex items-baseline justify-between flex-wrap ">
                    
                  <div className="flex flex-col items-center pr-[60px]">
                   <img src={Logo} alt="" className='md:cursor-pointer w-[100px] rounded-[50%] pb-[10px]  ' />
                   <h2>Koson tuman 1-sonli kasb hunar maktabi</h2>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-[24px]'>
                      Sahifalar
                    </p>
<ul >
  <li >
    <NavLink to='/tarix' className="flex items-center">
   < IoIosArrowForward/> Kasb-Hunar Maktabi
    </NavLink>
  </li>
  <li>
    <NavLink to='/raxbariyat' className="flex items-center">
    < IoIosArrowForward/> Tuzulma
    </NavLink>
  </li>
  <li>
    <NavLink to="/tarix" className="flex items-center">
    < IoIosArrowForward/> Faoliyat
    </NavLink>
  </li>
  <li>
    <NavLink to="/qabul" className="flex items-center">
    < IoIosArrowForward/> Qabul-{year}
    </NavLink>
  </li>
  <li>
    <NavLink to='/talabalar' className="flex items-center">
    < IoIosArrowForward/> Talabalar
    </NavLink>
  </li>
  <li>
    <NavLink to='/xizmatlar' className="flex items-center">
    < IoIosArrowForward/>Interaktiv xizmatlar
    </NavLink>
  </li>
</ul>
                  </div>
<div className="flex flex-col md:w-[50%]">

</div>
                  </div>
                </div>
            </footer>
    </BrowserRouter>
  );
}

export default App;
