import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <br />
        <br />
        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}

        {/* <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button> */}

        {/* <p>A Product by Codifynest</p> */}
      </nav>

      <h1 className='head_text'>
      {/* AI-Powered Article Summarizer <br className='max-md:hidden' /> */}
      Advanced AI Article Summarizer <br className='max-md:hidden' />

        <span className='orange_gradient '>Powered by GPT-4</span>
      </h1>
      <h2 className='desc'>
      Enhance Your Reading & Simplify Complex Articles into Clear Summaries with Cutting-Edge AI
      </h2>
    </header>
  );
};

export default Hero;
