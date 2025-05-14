import React from 'react'

const Intro = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="bg-zinc-800 p-6 rounded-lg mt-10 text-center w-full max-w-3xl mx-4">
        <p className="mb-6 font-normal text-gray-300 lg:mb-8 dark:text-gray-400 text-justify">
          Hi, perkenalkan saya Ilham Hidayatullah, seorang Software Engineer dengan keahlian di bidang pengembangan aplikasi Mobile dan Website. Dengan pengalaman 3 Tahun+ sebagai Software Engineer, saya telah mengembangkan berbagai solusi digital mulai dari aplikasi mobile interaktif, sistem manajemen berbasis web, hingga integrasi API. Saya terbiasa membangun aplikasi dengan struktur yang bersih dan maintainable, serta menerapkan prinsip clean code dalam setiap proyek yang saya kerjakan.
        </p>
        <div className="flex justify-between items-center space-x-4">
          <img
            src="/assets/hero-img.webp" 
            alt="Your Photo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white leading-tight">
            <div className="flex items-start justify-start">
              <span className="text-4xl font-bold">3</span>
              <span className="text-purple-500 text-4xl font-bold ml-1">+</span>
            </div>
            <div className="text-sm font-normal mt-1">Tahun Pengalaman</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Intro