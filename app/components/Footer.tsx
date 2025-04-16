import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Al-Furqan</h2>
          <p className="text-sm leading-relaxed">
            Pondok Pesantren Al-Furqan berkomitmen mencetak generasi Islami yang unggul dalam ilmu, amal, dan akhlak.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            {["Beranda", "Tentang", "Program", "Galeri", "Pendaftaran", "Kontak"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="hover:underline hover:text-blue-300 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Jl. Pondok Pesantren No.1, Jakarta
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> (021) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@alfurqan.sch.id
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaYoutube /></a>
          </div>

          {/* Optional Newsletter */}
          <form className="mt-6">
            <label className="block text-sm mb-2">Dapatkan info terbaru:</label>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-3 py-2 text-sm text-gray-800 rounded-l-md"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-r-md hover:bg-yellow-500 transition"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} Pondok Pesantren Al-Furqan. All rights reserved.
      </div>
    </footer>
  );
}
