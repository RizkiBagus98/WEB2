export default function Gallery() {
    return (
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Galeri Kegiatan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((img, i) => (
            <img
              key={i}
              src={`/${img}`}
              alt={`Foto ${i + 1}`}
              className="rounded-lg shadow-lg object-cover"
            />
          ))}
        </div>
      </section>
    )
  }
  