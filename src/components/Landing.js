import React from "react";
import pic from "../assets/8038_Thomas Levine_VA003FGD D.jpg";
import './Landing.css';

export const Landing = () => {
  return (
    <div className="flex flex-col">
      <div
        className="
        z-0
        relative top-20
        w-4/5 mx-auto pt-5
        grid grid-cols-2
        h-96

        "
      >
        <div className="flex justify-center">
          <img src={pic} alt="headshot" className="rounded-xl w-72 h-72 shadow-xl" />
        </div>
        <div className="space-y-8">
          <h1 className="shadow-xl text-5xl bg-green-300 rounded-lg w-auto inline-block p-2.5 ml-5">Welcome!</h1>
          <p className="bg-gray-100 rounded-lg shadow-lg p-2.5">
            My name is Thomas Levine, and I love to learn how things work. I am
            currently working on several projects to explore the intersection of
            music and computer science.
          </p>
          <div className="socials bg-green-300 rounded-lg p-2.5 inline-block ml-7 shadow-xl">
            <h3>Connect with me!</h3>
            <div className="social-icons">(github) (linkedin)</div>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto mt-32">
          <hr/>
          <h1 className="text-3xl">Featured in</h1>
          <div className="shadow-inner rounded-md bg-gray-100">
            <ul className="divide-y-2 divide-solid">
                <li>Cren</li>
                <li>Cren</li>
                <li>Cren</li>
                <li>Cren</li>
            </ul>
          </div>
      </div>
    </div>
  );
};
