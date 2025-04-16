export default function FacilityList() {
    return (
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">Fasilitas Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Masjid</h3>
            <img
              src='/1.jpg'
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="text-lg text-gray-700">Fasilitas masjid untuk kegiatan ibadah dan pengajian sehari-hari.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Perpustakaan</h3>
            <p className="text-lg text-gray-700">Perpustakaan yang lengkap untuk mendalami ilmu pengetahuan dan agama.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Asrama</h3>
            <p className="text-lg text-gray-700">Asrama yang nyaman untuk tempat tinggal santri selama belajar.</p>
          </div>
        </div>
      </section>
    )
  }
  