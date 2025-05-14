import React, { useEffect, useState  } from "react";
import { initFlowbite } from 'flowbite'

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    initFlowbite();

    const handleScroll = () => {
        const sections = ['home', 'about', 'project', 'contact'];
        const scrollPos = window.scrollY + window.innerHeight / 2;
  
        for (let id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const bottom = top + el.offsetHeight;
  
            if (scrollPos >= top && scrollPos < bottom) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (id) =>
    `block py-2 px-3 rounded-sm md:p-0 ${
      activeSection === id
        ? "text-purple-700 dark:text-purple-500"
        : "text-gray-900 dark:text-white"
    } hover:bg-transparent hover:text-purple-700 `;

  return (
    <>
    <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-zinc-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Portfolio</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-gray-700">
                <li>
                <button
                    onClick={() => scrollToSection('home')}
                    className={navItemClass('home')}
                >
                    Beranda
                </button>
                </li>
                <li>
                <button
                    onClick={() => scrollToSection('about')}
                    className={navItemClass('about')}
                >
                    Tentang
                </button>
                </li>
                <li>
                <button
                    onClick={() => scrollToSection('project')}
                    className={navItemClass('project')}
                >
                    Proyek
                </button>
                </li>
                <li>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={navItemClass('contact')}
                >
                    Kontak
                </button>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header