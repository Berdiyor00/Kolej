import React from 'react';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { IoPeopleSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { useSpring, animated } from 'react-spring';

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 15, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const Icons = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-[50px] md:gap-[120px] md:row-[30px] flex-wrap justify-center pt-[100px]">
        <div className="item flex flex-col justify-cente items-center">
          <BsCalendar2WeekFill className="size-[80px] text-[#fff] " />
          <h2 className="capitalize text-[30px] text-[#fff]">Guruhlar soni</h2>
          <div className="flex items-center">

          <p className="text-[68px] text-[#FE6803]"><Number n={24} />
          </p>
          <p className='text-[68px] text-[#FE6803]'>+</p>
          </div>
        </div>
        <div className="item flex flex-col justify-cente items-center">
          <MdOutlineCastForEducation className="size-[80px] text-[#fff] " />
          <h2 className="capitalize text-[30px] text-[#fff]">Yo'nalishlar</h2>
          <div className="flex items-center">

          <p className="text-[68px] text-[#FE6803]"><Number n={10} />
          </p>
          <p className='text-[68px] text-[#FE6803]'>+</p>
          </div>
        </div>
        <div className="item flex flex-col justify-cente items-center">
           <IoPeopleSharp className="size-[80px] text-[#fff] " /> 
          <h2 className="capitalize text-[30px] text-[#fff]">Talabalar</h2>
          <div className="flex items-center">

<p className="text-[68px] text-[#FE6803]"><Number n={500} />
</p>
<p className='text-[68px] text-[#FE6803]'>+</p>
</div>
        </div>
        <div className="item flex flex-col justify-cente items-center">
          <LiaChalkboardTeacherSolid className="size-[80px] text-[#fff] " />
          <h2 className="capitalize text-[30px] text-[#fff]">O'qituvchilar</h2>
          <div className="flex items-center">

<p className="text-[68px] text-[#FE6803]"><Number n={70} />
</p>
<p className='text-[68px] text-[#FE6803]'>+</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
