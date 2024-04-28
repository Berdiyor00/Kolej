import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { links } from "./Mylinks";
import { LuPanelBottomClose } from "react-icons/lu";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link,index) => (
        <div key={index} className="pt-[20px] text-[#fff]">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group borders"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
        
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid text-[black] grid-cols-1 gap-10">
                    {link.sublinks.map((mysublinks,item) => (
                      <div key={item} >
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
   
                <div className="text-[#ffffff]">
                  <button className="open-file mt-[20px]"     onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }>
  <span className="file-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
      <path
        stroke-width="5"
        stroke="black"
        d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
      ></path>
    </svg>
    <span class="file-front"></span>
  </span>
Menu
</button>
                 
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
          
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
