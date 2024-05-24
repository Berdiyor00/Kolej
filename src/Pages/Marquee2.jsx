import React from 'react'
import OniID from "../assets/One_ID-01.png"
import Ijro from "../assets/ijro.png"
import Data from "../assets/data.gov.uz.png"
import Prizdent from "../assets/prezident.uz.png"
import Oak from "../assets/oak.uz.png"
import Mehnat from "../assets/mehnat.png"
import Gov from "../assets/gov.png"
import Lex from "../assets/lex.png"
import Oligoh from "../assets/logo-oliygoh.svg"
import { NavLink } from 'react-router-dom'
const Marque = () => {
  return (
    <div >

        <div className="flex items-center justify-between gap-[150px]">
          <NavLink to='https://gov.uz/bv/'>

<img src={Mehnat} alt="" className='w-[250px]' />
          </NavLink>
          <NavLink to='https://gov.uz/oz'>

<img src={Gov} alt="" className='w-[150px]' />
          </NavLink>
{/* <img src={Ijro  } alt="" className='w-[150px]' /> */}
<NavLink to='https://lex.uz/uz/'>

<img src={Lex } alt="" className='w-[150px]' />
</NavLink>
<NavLink to='https://oliygoh.uz/'>
<img src={Oligoh} alt="" className='w-[250px] ' />
</NavLink>
<NavLink to='https://oak.uz/'>

<img src={Oak} alt="" />
</NavLink>

          

        </div>
    </div>
  )
}

export default Marque