import React from 'react'
import MyGov from "../assets/My.gov.uz.svg.png"
import OniID from "../assets/One_ID-01.png"
import Ijro from "../assets/ijro.png"
import Data from "../assets/data.gov.uz.png"
import Oak from "../assets/oak.uz.png"
import Prizdent from "../assets/prezident.uz.png"
import { NavLink } from 'react-router-dom'
const Marque = () => {
  return (
    <div >

        <div className="flex items-center justify-between gap-[150px]">
          <NavLink to='https://my.gov.uz/uz'>

<img src={MyGov} alt="" className='w-[150px]' />
          </NavLink>
          <NavLink to='https://id.egov.uz/'>

<img src={OniID} alt="" className='w-[150px]' />
          </NavLink>
<NavLink to='https://edo.ijro.uz/welcome'>

<img src={Ijro  } alt="" className='w-[150px]' />
</NavLink>

<NavLink to='http://dd.gov.uz/uz'>

<img src={Data} alt="" className='w-[250px]' />
</NavLink>
<NavLink to='https://president.uz/uz'>

<img src={Prizdent} alt="" className='w-[250px] ' />
</NavLink>
<NavLink to='https://oak.uz/'>

<img src={Oak} alt="" />
</NavLink>
          

        </div>
    </div>
  )
}

export default Marque