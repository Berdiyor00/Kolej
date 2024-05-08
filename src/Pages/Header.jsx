import React from 'react';

import Typed from 'typed.js'; // Corrected import statement for Typed
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Oshpaz from "../assets/oshpaz.jpg";
import Svarka from "../assets/svarka.jpg";
import Gaz from "../assets/gaz.jpg";
import Tikuvchi from "../assets/tikuvchi.jpg";
import Dasturchi from "../assets/dasturchi.jpg";
import Tokar from "../assets/tokar.jpg";
import Traktor from "../assets/traktor.jpg";
import Turarjoy from "../assets/turarjoy.jpg";
import Prava from "../assets/prava.jpg";
import Bank from "../assets/bank.png";
import Icons from '../Components/Icons';
import Yangiliklar from "./Yangiliklar"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { NavLink } from 'react-router-dom';


function ButtonDarkExample() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Koson Tuman 1-sonli Kasb Hunar Maktabi'],
      typeSpeed: 90,
      loop:true,
      backSpeed:90,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  
  return (
    <>
      <header className='background mt-[80px]'>
        <div className="container pt-[100px]">
          <div className="flex items-center justify-center ">
          <h1 className='text-center text-[#fff] md:mt-[0px]  font-medium text-[48px] md:text-[90px] max-w-[990px]' ref={el}></h1>
          </div>
        </div>
      </header>
      <main>
        <section className='pb-[90px]'>
          <div className="container">
<div className="pt-[40px]">

          <h2 className='text-center text-[38px] capitalize text-[#cec5c5]'>
            Kasb hunar maktabidagi yo'nalishlar
          </h2>
</div>
          <div className="pt-[60px]">
          <div className="flex gap-[90px] flex-wrap capitalize justify-center">
            <div className="item w-[290px] h-[350px] bg-black">

  <NavLink to={"/oshpaz"}>
<div className="relative group cursor-pointer">

  <img src={Oshpaz} alt="Your Image" className="w-[300px] rounded  object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-[1s] flex flex-col items-center justify-center">
    <p className='font-mono text-[28px]'>Oshpaz qandolatchi</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
  </NavLink>
            </div>
            <NavLink to={"/svarka"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Svarka} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-[1s] flex  flex-col items-center justify-center">
    <p className=' text-center font-mono text-[24px]'>Payvandlovchi (elektrgazpayvandlash ishlari)</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/gaz"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Gaz} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
    <p  className=' text-center font-mono text-[24px]'>Gaz jihozlari chilangari</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/tikuvchi"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Tikuvchi} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-70  text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
    <p className=' text-center font-mono text-[24px]'>Tikuvchi</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/dasturchi"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group">
  <img src={Dasturchi} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-70  text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
    <p className=' text-center font-mono text-[24px]'>Raqamli axborotlarni qayta ishlash 
ustasi
</p>
<button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/tokar"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Tokar} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
    <p className=' text-center font-mono text-[24px]'>Tokar</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/traktor"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Traktor} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
    <p className=' text-center font-mono text-[24px]'>Traktorchi-mashinist</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/prava"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Prava} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
    <p  className=' text-center font-mono text-[24px]'>Avtomobil dvigatellarini tashxislashva ta’mirlash</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>
</div>
            </div>
            </NavLink>
            <NavLink to={"/turarjoy"}>

            <div className="item w-[290px] h-[350px] bg-black">

<div className="relative group">
  <img src={Turarjoy} alt="Your Image" className="w-[300px] rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100  flex flex-col items-center justify-center">
    <p  className=' text-center font-mono text-[24px]'>Turar-joy kommunal xo’jaligi ustasi</p>
    <button className="border text-center w-[120px] mt-[20px]">
      Yana...
    </button>
  </div>

</div>
            </div>
            </NavLink>
            <div className="item w-[290px] hidden  h-[350px] bg-black">

<div className="relative group cursor-pointer">
  <img src={Bank} alt="Your Image" className=" w-[300px]  rounded object-cover h-[350px]"/>
  <div className="absolute inset-0 bg-black bg-opacity-80  text-white opacity-0        group-hover:opacity-100 flex items-center justify-center">
     <p className=' text-center font-mono text-[24px]'>Bank nazoratchisi</p>
  </div>
</div>
            </div>
          </div>
          </div>
          </div>
        </section>
        <section className='paralax'>
          
<Icons/>
          
        </section>
        <section>
          <div className="container">
            <Yangiliklar/>
          </div>
        </section>
      <section className='w-[100%] bg-blue-900 pt-[50px] text-[#fff] pb-[50px]'>
    <div className="container">
      <div className="md:flex md:items-center md:justify-between flex-wrap  md:pl-[100px] pr-[100px]  ">
        
<div className="flex items-center gap-[20px] flex-wrap pb-[20px] md:pb-0 ">
      <HiOutlineClipboardDocumentList className='text-[48px]' />
      <div className="flex flex-col flex-wrap  ">

<h1>
  Direktor virtual qabulxonasi
</h1>
<p>
Ariza, shikoyat, taklif yoki fikrlaringiz bormi?
</p>
      </div>
</div>
<div className="flex">
  <NavLink to=''>

  <button className='w-[200px] border h-[55px]'>Ariza yuborish</button>
  </NavLink>
</div>

      </div>
    </div>
      </section>
        <section>

        </section>
      </main>
    </>
  );
}

export default ButtonDarkExample;
