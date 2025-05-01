import React from "react";

const T4 = () => {
  return (
    <>
      <div className="text-cyan-300 text-6xl">
        Tailwind v4 Installation Guide
      </div>
      <ul>
        <li>Dont install tailwind at the time of Next js app insalltaion</li>
        <li>
          go to{" "}
          <i>
            https://tailwindcss.com/docs/installation/framework-guides/nextjs
          </i>{" "}
          and follow the steps
          <ul>
            <li>npm install tailwindcss @tailwindcss/postcss postcss</li>
            <li>add postcss.config.mjs</li>
            <li>add ${'@import "tailwindcss";'} in globals.css</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default T4;
