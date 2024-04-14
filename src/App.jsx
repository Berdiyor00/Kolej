import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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


function App() {
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
      <footer className='w-[100%] h-[300px] bg-[red] '>
                <div className="container">
                    <h1>Hello</h1>
                </div>
            </footer>
    </BrowserRouter>
  );
}

export default App;
