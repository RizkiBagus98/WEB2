import Link from "next/link";

export default function Hero() {
    return (
      <section className="bg-blue-600 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Pondok Pesantren Al-Furqan</h1>
        <p className="text-lg mb-8">
          Mencetak Generasi Qur'ani yang Siap Menghadapi Tantangan Zaman
        </p>
        <Link href="/program">
          <button className="px-8 py-3 bg-white text-blue-600 rounded hover:bg-gray-200 transition duration-300">
            Daftar Program Kami
          </button>
        </Link>
      </section>
    )
  }
  