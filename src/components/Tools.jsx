import React from 'react'
import Intro from './Intro';

const tools = [
  {
    name: "Flutter",
    image: "/assets/tools/flutter.png",
  },
  {
    name: "Laravel",
    image: "/assets/tools/laravel.png",
  },
  {
    name: "Express JS",
    image: "/assets/tools/express.png",
  },
  {
    name: "React JS",
    image: "/assets/tools/react.png",
  },
  {
    name: "Jquery",
    image: "/assets/tools/jquery.png",
  },
  {
    name: "Bootstrap",
    image: "/assets/tools/bootstrap.png",
  },
  {
    name: "Tailwind",
    image: "/assets/tools/tailwind.png",
  },
  {
    name: "SQL Server",
    image: "/assets/tools/sqlserver.png",
  }, {
    name: "MySQL",
    image: "/assets/tools/mysql.png",
  },
  {
    name: "Firebase",
    image: "/assets/tools/firebase.png",
  },
  {
    name: "Supabase",
    image: "/assets/tools/supabase.png",
  },  
  {
    name: "Postman",
    image: "/assets/tools/postman.png",
  },
  {
    name: "Gitlab",
    image: "/assets/tools/gitlab.png",
  },
  {
    name: "Github",
    image: "/assets/tools/github.png",
  },
  {
    name: "VS Code",
    image: "/assets/tools/vscode.png",
  }
];

const Tools = () => {
  return (
    <>
     <div className="max-w-screen-xl px-4 py-8 mx-auto mt-16">
        <h2 className="text-3xl font-semibold mb-2 text-start text-black dark:text-white" data-aos="fade-up" 
        data-aos-duration="1000">Tools yang dipakai</h2>
        <p className="font-normal text-black mb-6 dark:text-gray-300" data-aos="fade-up"
        data-aos-duration="1000">Berikut ini beberapa tools yang saya gunakan, untuk membangun aplikasi.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => {
          const cols = 4;
          const row = Math.floor(index / cols);
          const col = index % cols;
          const baseDelay = 100;
          const delay = (row * cols + col) * baseDelay;

          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border border-zinc-600 rounded-lg shadow-sm bg-white dark:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={delay}
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-lg font-medium text-gray-800 dark:text-white">
                {tool.name}
              </span>
            </div>
          );
        })}
        </div>
      </div>
    </>
  )
}

export default Tools