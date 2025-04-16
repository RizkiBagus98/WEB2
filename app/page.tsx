import FacilityList from "./components/FacilityList";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProgramHighlights from "./components/ProgramHighlights";
import TestimonialSlider from "./components/TestimonialSlider";



export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Tentang Kami</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Pondok Pesantren Al-Furqan merupakan lembaga pendidikan Islam yang berdedikasi untuk mencetak generasi Qur'ani,
          berkarakter, dan berdaya saing global. Dengan pendekatan kurikulum terpadu, kami memadukan pendidikan diniyah dan umum.
        </p>
      </section>

      <ProgramHighlights />

      <FacilityList />

      <Gallery />

      <TestimonialSlider />

      {/* CTA Pendaftaran */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Bergabunglah Bersama Kami!</h2>
        <p className="text-lg mb-6">Pendaftaran santri baru tahun ajaran 2025/2026 telah dibuka.</p>
        <a href="/pendaftaran">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Daftar Sekarang
          </button>
        </a>
      </section>

      <Footer />
    </main>
  );
}
