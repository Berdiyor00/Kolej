import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import direktor from "../assets/direktor.jpg"
// import uquvishlari from "../assets/o`quvshlari.jpg"
// import yordamchi from "../assets/yordamchi.jpg"
import Person from "../assets/images.png"
import Persons from "../assets/Persons.png"

const Raxbariyat = () => {
    const [currentPage, setCurrentPage] = useState('page1'); 
    const [directoryTitle, setDirectoryTitle] = useState('Kasb-hunar maktab direktori'); 
    const [personName, setPersonName] = useState('Xusainov Farhod Saidmurodovich'); // Initial name
    const [personText,setPersonText]=useState('Xusainov Farhod Saidmurodovich 1981 yil 8 aperlda Qashqadaryo viloyati Qamashi tumanida tug`ulgan. 2003 yilda Nizomiy nomidagi Toshkent davlat pedagogika universitetini tamomlagan.O`zbekiston Respublikasi Ekologiya demokratik partiyasi a`zosi Rus tilini biladi 2003-2006 Toshkent shahar Oqtepa pedagogika kollejida o‘qituvchi, 2006-2010 Toshkent shahar MATBAA kasb-hunar kolejida o‘qituvchi,   2010-2012 Qarshi axborot texnologiyalari kasb-hunar kollejida o‘qituvchi,2012-2013 Qarshi axborot texnologiyalari kasb-hunar kollejida ishlab chiqarish ta’limi ustasi, 2013-2019 Qarshi axborot texnologiyalari kasb-hunar kollejida  direktor o‘rinbosari, lavozimlarida faoliyat olib borgan.2019-2020 Koson kompyuter texnologiyalari kasb-hunar kolleji direktori 2020 yildan Koson 1-son kasb-hunar maktabini direktori lavozimida"')
    const [text,SetText]=useState("Koson tumani 1-son   kasb-hunar maktab  direktori")
    const [personTexts,SetPersonTexts]=useState("")
    const [namePerson ,setName]=useState("")
    const [tel,SetTel]=useState("+998 91 458 02 04")


    const handlePageChange = (pageName) => {
        setCurrentPage(pageName); 
    
        switch (pageName) {
            case 'page1':
                setDirectoryTitle('Kasb-hunar maktab direktori');
                setPersonName('Xusainov Farhod Saidmurodovich');
                setPersonText('Xusainov Farhod Saidmurodovich 1981 yil 8 aperlda Qashqadaryo viloyati Qamashi tumanida tug`ulgan. 2003 yilda Nizomiy nomidagi Toshkent davlat pedagogika universitetini tamomlagan.O`zbekiston Respublikasi Ekologiya demokratik partiyasi a`zosi Rus tilini biladi ') // Update name based on page
                SetText("Koson tumani 1-son   kasb-hunar maktab  direktori")
                SetPersonTexts("2003-2006 Toshkent shahar Oqtepa pedagogika kollejida o‘qituvchi, 2006-2010 Toshkent shahar MATBAA kasb-hunar kolejida o‘qituvchi,   2010-2012 Qarshi axborot texnologiyalari kasb-hunar kollejida o‘qituvchi,2012-2013 Qarshi axborot texnologiyalari kasb-hunar kollejida ishlab chiqarish ta’limi ustasi, 2013-2019 Qarshi axborot texnologiyalari kasb-hunar kollejida  direktor o‘rinbosari, 2019-2020 Koson kompyuter texnologiyalari kasb-hunar kolleji direktori lavozimlarida faoliyat olib borgan. ")
                setName("2020 yildan Koson Tumani  1-son Kasb-Hunar maktabini direktori lavozimida ishlab kelmoqda")
                SetTel("+998 91 458 02 04")
                break;
            case 'page2':
                setDirectoryTitle('O`quv ishlari bo`yicha deriktor o`rinbosari');
                setPersonName('Xazratkulov O‘lmasbek Ibragimovich'); // Set name for Page 2
                setPersonText('World')
                SetText("Koson tuman")
                SetPersonTexts("")
                setName("")
                SetTel("")
                break;
            case 'page3':
                setDirectoryTitle('Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha direktor o`rinbosari');
                setPersonName('Mahkamov Abdul Qodir Ismoil o‘g‘li'); // Set name for Page 3
                setPersonText('Dunyo')
                SetText("Koson tuman")
                SetPersonTexts("")
                setName("")
                SetTel("")
                break;
            case 'page4':
                setDirectoryTitle('Ishlab chiqarish ta’lim bo‘yicha direktor o‘rinbosari');
                setPersonName('Zokirova Dildora Raxmatullayevna'); // Set name for Page 3
                setPersonText('hayot')
                SetText("Koson tuman")
                SetPersonTexts("")
                setName("")
                SetTel("")
                break;
           
            default:
                setDirectoryTitle('Kasb-hunar maktab direktori');
                setPersonName('Xusainov Farhod Saidmurodovich'); // Default name
                setDirectoryTitle('Kasb-hunar maktab direktori');
                SetText("Koson tuman")
                 SetPersonTexts("")
                setName("")
                SetTel("+998 91 458 02 04")
                break;
        }
    };
    const newData = new Date().getDate();
    const newTime = new Date().getFullYear();
    const month=new Date().getMonth()+1
    return (
        <div className=''>
            <div className="container pt-[100px]">
            <div className="flex flex-wrap flex-col">
                <h2 className='text-[30px] text-[#FFF] pb-[20px]'>{directoryTitle}</h2>
                <hr className='pb-[20px] md:w-[900px]' />
                <p className='text-[#fff] pb-[10px]'>
             {newData}.{`0${month}`}.{newTime}
                </p>
                <hr className='pb-[20px] md:w-[900px]' />
                <div className="flex items-start flex-wrap justify-between gap-[20px]">
                    <div className=" sticky flex flex-wrap gap-[20px]">
                        <div className="w-[300px] h-[400px] bg-white">
                            {currentPage === 'page1' && <img src={direktor} alt="direktor"/>}
                            {currentPage === 'page2' && <img src={Persons} alt='uquvishlari' className='mt-[20px]'/>} 
                            {currentPage === 'page3' && <img src={Persons} alt="Yordamchi"/>} 
                            {currentPage === 'page4' && <img src={Person} alt="Yordamchi" className='mt-[50px] ml-[40px]'/> } 
                           
                        </div>
                        
                        <div className="flex flex-wrap flex-col">
                            <h2 className='text-[#fff] text-[30px] pb-[10px]'>
                                {personName} {/* Use personName state for the name */}
                            </h2>
                            
                            <div className="md:w-[550px] h-[3px] bg-[#fff]"></div>
                          <p className='text-[#fff] capitalize mt-[20px] text-[24px] max-w-[500px] text-justify'>{text}</p>
                          <div className="flex gap-[10px] text-[#fff] pt-[30px] text-[20px]">
<p className=' capitalize'>
    Telefon:
</p>
                         <a href='tel:+998 91 458 02 04'>{tel}</a>
                          </div>
                        </div>
                        
                        <p className='text-[#fff] text-[20px]'></p>
                    </div>
                    <div className="md:sticky-top mb-5 top-[220px] right-[50px]">
                        <div className="w-[300px] md:w-[400px] md:h-[70vh] p-[30px] mt-[20px] md:relative   bg-white">
                            <div className="md:absolute top-[-50px]">
                                <hr className='mt-[-25px]' />
                                <h1 className='text-[#fff] text-center pt-[20px] pb-[10px] md:w-[300px]'>Sahifalar</h1>
                                <hr />
                            </div>
                            <ul>
                                <li>
                                    <NavLink onClick={() => handlePageChange('page1')} >
                                        Deriktor
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => handlePageChange('page2')} className='text-[#263fff]'>
                                        O`quv ishlari bo`yicha deriktor o`rinbosari
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => handlePageChange('page3')} className='text-[#263fff]'>
                                        Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha direktor o`rinbosari
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => handlePageChange('page4')} className='text-[#263fff]'>
                                        Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha direktor o`rinbosari
                                    </NavLink>
                                </li>
                                {/* Add more navigation links as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className='md:mt-[-99px]'>
                <p className='text-[#fff] max-w-[900px] text-[22px] pb-[30px]'>
               {personText} 
                </p>
                <p className='text-[#fff] max-w-[900px] text-[22px] pb-[30px]'>{personTexts}</p>
                <p className='text-[#fff] max-w-[900px] text-[22px]'>{namePerson}</p>
            </section>
            </div>
         
        </div>
    );
}

export default Raxbariyat;
