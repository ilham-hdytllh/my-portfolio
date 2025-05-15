import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          showToast('✅ Pesan berhasil dikirim!', 'success');
          form.current.reset();
        },
        (e) => {
          console.log(import.meta.env.EMAILJS_SERVICE_ID);
          console.log(e);
          showToast('❌ Gagal mengirim pesan. Coba lagi nanti.', 'error');
        }
      );
  };

  return (
    <>
      {/* Toast */}
      {toast.show && (
        <div className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg z-50 transition-all duration-300
          ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {toast.message}
        </div>
      )}

      {/* Contact Form */}
      <section id="contact">
        <div className="px-4 bg-white dark:bg-zinc-900 pt-10 pb-10">
          <h2 className="text-3xl font-semibold mb-2 text-center text-black dark:text-white" data-aos="fade-up"
        data-aos-duration="1000">Kontak</h2>
          <p className="font-normal text-black mb-8 text-center dark:text-gray-300" data-aos="fade-up"
        data-aos-duration="1000" data-aos-delay="300">Terhubung dengan saya sekarang.</p>
          <div className="flex justify-center" data-aos="fade-up"
        data-aos-duration="1000" data-aos-delay="600">
            <div className="w-full max-w-lg bg-white dark:bg-zinc-800 rounded-xl shadow-md p-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
                  <input
                    type="text"
                    className="block w-full p-4  placeholder:text-gray-400 dark:placeholder:text-gray-300 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-500 dark:border-gray-600 dark:text-white"
                    placeholder="Nama anda"
                    name="user_name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    type="email"
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                              dark:bg-gray-500 dark:border-gray-600 dark:text-white 
                              placeholder:text-gray-400 dark:placeholder:text-gray-300"
                    placeholder="example@email.com"
                    name="user_email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pesan</label>
                  <textarea
                    rows="4"
                    className="block w-full p-3  placeholder:text-gray-400 dark:placeholder:text-gray-300 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-500 dark:border-gray-600 dark:text-white"
                    placeholder="Tulis pesan Anda..."
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 text-base font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-500 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
