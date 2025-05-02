import React from "react";

const T4 = () => {
  return (
    <>
      <div className="text-cyan-300 text-5xl text-shadow-black font-bold">
        Tailwind v4 Installation Guide
      </div>
      <ul className="list-disc !p-5">
        <li className="text-red-500 font-extrabold">
          Dont install tailwind at the time of Next js app insalltaion
        </li>
        <li>
          go to{" "}
          <a
            href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
            target="_blank"
            className="font-mono !underline italic bg-amber-200 hover:bg-amber-300 hover:font-semibold rounded-md"
          >
            https://tailwindcss.com/docs/installation/framework-guides/nextjs
          </a>{" "}
          and follow the steps -
          <ul className="list-disc !pl-5">
            <li>
              <code className="bg-blue-300">
                npm install tailwindcss @tailwindcss/postcss postcss
              </code>
            </li>
            <li>
              add <code className="bg-gray-300 italic">postcss.config.mjs</code>{" "}
              file in root directory
            </li>
            <li>
              add{" "}
              <code className="bg-green-100">{'@import "tailwindcss";'}</code>{" "}
              in <code className="bg-gray-300 italic">globals.css</code>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default T4;
