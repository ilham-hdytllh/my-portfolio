import React from 'react'

const projects = [
    {
      title: 'Bukuku Personal',
      image: '/assets/proyek/bukuku_personal.png',
      description: 'Aplikasi untuk mencatat keuangan pribadi, dapat menghitung PPh 21 OP & PPh UMKM.',
      technologies: ['Flutter', 'Get X'],
      previewUrl: '#',
    },
    {
      title: 'Bukuku Bussines',
      image: '/assets/proyek/bukuku_bussiness.png',
      description: 'Aplikasi Akutansi untuk skala usaha.',
      technologies: ['Flutter', 'Get X'],
      previewUrl: '#',
    },
    {
      title: 'Agri Malaysia',
      image: '/assets/proyek/agri_malay.png',
      description: 'Aplikasi Pameran Dagang Pertanian B2B Terbesar di Malaysia yang di hadiri oleh exhibitors dari berbagai negara.',
      technologies: ['Flutter', 'Firebase', 'GetX'],
      previewUrl: '#',
    },    
    {
        title: 'TBC Reminder',
        image: '/assets/proyek/tbc_reminder.png',
        description: 'Aplikasi Flutter untuk mengingatkan pasien TB agar minum obat tepat waktu dengan alarm dan notifikasi.',
        technologies: ['Flutter', 'Firebase', 'GetX', 'Laravel'],
        previewUrl: '#',
      },
      {
        title: 'Vsing Foodmenu',
        image: '/assets/proyek/vsing.jpeg',
        description: 'Aplikasi pemesanan hidangan di Restaurant.',
        technologies: ['Flutter', 'Firebase', 'Provider'],
        previewUrl: '#',
      },
      {
        title: 'Coffe Shop UI',
        image: '/assets/proyek/cofee-shop.jpeg',
        description: 'Flutter UI aplikasi pemesanan Kopi.',
        technologies: ['Flutter'],
        previewUrl: 'https://remindertb.app',
      },
      {
        title: 'Travel News UI',
        image: '/assets/proyek/travel-news.jpeg',
        description: 'Flutter UI aplikasi Travel News.',
        technologies: ['Flutter'],
        previewUrl: '#',
      },
];

const Proyek = () => {
  return (
    <>
    <section id="project" className="bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-2 text-center text-black dark:text-white">Proyek</h2>
        <p className="font-normal text-black mb-8 text-center dark:text-gray-300">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-zinc-600">
                <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                <div className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full  bg-zinc-900 text-white">
                        {tech}
                    </span>
                    ))}
                </div>
                <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition"
                >
                    Preview Project
                </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    </>
  )
}

export default Proyek