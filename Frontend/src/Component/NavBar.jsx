import React  from 'react';
import navimg from '../assets/logo-digi.webp';

const NavBar = () => {
  

  return (
    <div>
      <nav
        className=" bg-gradient-to-r from-indigo-500 via-purple-500 hover:text-white to-pink-500
        
 flex justify-around items-center border border-b-2 border-gray-300 capitalize py-5 px-2">
     
        <div>
          <img className="w-[200px]" src={navimg} alt="Logo" />
        </div>

        <div>
          <p className="text-xl font-bold text-white">
            Welcome to DigiPrima Pre-Hire Test Challenge
          </p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
