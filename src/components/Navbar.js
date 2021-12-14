import React from "react";
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="
    inline-grid grid-cols-4 items-center
    z-999
    bg-black
    fixed 
    px-5
    w-full h-14
    rounded-b-md
    text-white">
      <h1 className="thomas-name text-3xl">Thomas Levine</h1>
      <div></div>
      <div></div>
      <div className="
      flex flex-row
      w-32 space-x-10">
        {/* <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3> */}
      </div>
    </div>
  );
};
