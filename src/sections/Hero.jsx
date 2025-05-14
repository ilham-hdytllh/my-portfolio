import React, { useEffect, useState  } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
//  useEffect(() => {
//         AOS.init({ duration: 2000 });
//  }, []);

  return (
    <>
     <section id="home" className="bg-white dark:bg-zinc-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7" >
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi, Saya Ilham Hidayatullah
          </h1>
          <p className="max-w-2xl mb-6 font-normal text-gray-300 lg:mb-8 dark:text-gray-400 text-justify">
          Saya adalah seorang Software Engineer dengan keahlian di bidang programming khususnya dalam pengembangan aplikasi berbasis Mobile dan maupun Website.
          </p>
          <a
            href="/assets/cv/CV Ilham Hidayatullah.pdf"
            download="CV_Ilham_Hidayatullah.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 mr-3 text-base font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
            >
            Download CV
            <img src="/assets/icons/download-icon.svg" alt="Download icon" className="w-5 h-5" />
          </a>
          {/* <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn more
          </a> */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" >
          <img
            src="/assets/profile.png"
            alt="mockup"
            className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)'
            }}
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero