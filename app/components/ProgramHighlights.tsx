export default function ProgramHighlights() {
    return (
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Program Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Tahfidz Al-Qur'an", desc: "Program intensif menghafal Al-Qur'an 30 Juz." },
            { title: "Bahasa Arab & Inggris", desc: "Pembelajaran dua bahasa untuk persiapan global." },
            { title: "Ilmu Diniyah", desc: "Kitab kuning, fiqih, aqidah, dan akhlak untuk bekal hidup." }
          ].map((prog, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{prog.title}</h3>
              <p className="text-gray-700">{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  