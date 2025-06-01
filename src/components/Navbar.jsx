import React from 'react'
import navitems from '../navitems.json'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
        <div className=" w-full max-h-[70px] flex justify-around items-center mb-[20px] fixed bg-white border-1 border-b-purple-500 rounded-b-[20px]" id="navbar">
        <a href="#" className="flex">
          <div className="w-70 flex gap-2 justify-center items-center h-[60px] hover:opacity-75" id="logo">
              <span className="w-[100px] h-[90%] bg-linear-to-br from-sky-500 to-[#DF73FF] text-[25px] text-white font-bold flex justify-center items-center rounded-[15px]">
                A S
              </span>
              <span className="block gap-2.5 w-[170px] h-[80%] mt-3">
                <p className="text-[16px] font-bold text-sky-500 ">
                    AKSHAT SRIVASTAVA
                </p>
                <p className="text-[13px] text-[#DF73FF] font-semibold">
                    Front-end Web Developer
                </p>
              </span>
          </div>
        </a>
        <div className="max-w-150 flex justify-between items-center gap-8" id="main">
            {navitems.map((navitem,) =>(
                <div key={navitem.id}
                className={`text-[15px] font-semibold text-sky-500 hover:underline cursor-pointer p-[15px] rounded-[15px]`}
                >
                   <Link to={navitem.scroll} smooth={true} duration={1000} offset={-70}>{navitem.item}</Link>
                    </div>
            ))}
            <a href="#"><button className="h-[80%] p-[15px] bg-[#DF73FF] text-[15px] font-bold hover:opacity-75 text-white rounded-[10px] cursor-pointer w-[150px] ml-[20px]">
                Hire
            </button>
            </a>
        </div>
    </div>
    </>
  );
};

export default Navbar;
