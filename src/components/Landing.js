import React from "react";
import pic from '../assets/8038_Thomas Levine_VA003FGD D.jpg';

export const Landing = () => {
    return (
        <div className="
        z-1
        relative top-20
        w-4/5 mx-auto
        grid grid-cols-2
        h-screen
        ">
            <img src={pic} alt="headshot"/>
            <h1 className="text-black">Test</h1>
        </div>
    )
}