const Hero = () => {

  return (
    <>
     <section id="home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 animate__animated animate__fadeInUp animate__delay-1s">
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi, Saya Ilham Hidayatullah
          </h1>
          <p className="max-w-2xl mb-6 font-normal text-gray-300 lg:mb-8 dark:text-gray-400 text-justify">
          Saya adalah seorang Software Engineer dengan keahlian di bidang programming khususnya dalam pengembangan aplikasi berbasis Mobile dan maupun Website.
          </p>
          <a
            href="/assets/cv/CV Ilham Hidayatullah.pdf"
            download="CV_Ilham_Hidayatullah.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 mr-3 mb-6 text-base font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
          >
            Download CV
            <img src="/assets/icons/download-icon.svg" alt="Download icon" className="w-5 h-5" />
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex animate__animated animate__fadeInUp animate__delay-2s">
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