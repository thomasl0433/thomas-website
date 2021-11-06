import React from "react";
import pic from "../assets/8038_Thomas Levine_VA003FGD D.jpg";

export const Landing = () => {
  return (
    <div
      className="
        z-0
        relative top-20
        w-4/5 mx-auto pt-5
        grid grid-cols-2
        h-screen
        border-red-500 border-2
        "
    >
      <div className="flex justify-center">
        <img src={pic} alt="headshot" className="rounded-xl w-72 h-72" />
      </div>
      <div>
        <h1 className="text-5xl">Welcome!</h1>
        <p>My name is Thomas Levine, and I love to learn how things work.
            I am currently working on several projects to explore the 
            intersection of music and computer science.
        </p>
      </div>
    </div>
  );
};
