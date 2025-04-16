"use client"
import { useState } from "react";

export default function FormulirPendaftaran() {
  const [formData, setFormData] = useState({
    nama: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    asalSekolah: "",
    nisn: "",
    program: "",
    namaAyah: "",
    pekerjaanAyah: "",
    namaIbu: "",
    pekerjaanIbu: "",
    namaWali: "",
    alamatOrtu: "",
    noHp: "",
    setuju: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    const isCheckbox = type === "checkbox" && "checked" in target;
    setFormData({
      ...formData,
      [name]: isCheckbox ? (target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    alert("Formulir berhasil dikirim!");
    // Kirim ke API atau backend di sini
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl text-black">
      <h2 className="text-2xl font-bold mb-4 text-center">Formulir Pendaftaran Santri Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input type="text" name="nama" placeholder="Nama Lengkap" onChange={handleChange} required className="input" />
        <input type="text" name="tempatLahir" placeholder="Tempat Lahir" onChange={handleChange} required className="input" />
        <input type="date" name="tanggalLahir" onChange={handleChange} required className="input" />
        <select name="jenisKelamin" onChange={handleChange} required className="input">
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <textarea name="alamat" placeholder="Alamat Lengkap" onChange={handleChange} required className="input" />
        <input type="text" name="asalSekolah" placeholder="Asal Sekolah" onChange={handleChange} className="input" />
        <input type="text" name="nisn" placeholder="NISN" onChange={handleChange} className="input" />

        <select name="program" onChange={handleChange} required className="input">
          <option value="">Pilih Program</option>
          <option value="Tahfidz">Tahfidz</option>
          <option value="Kitab Kuning">Kitab Kuning</option>
          <option value="Bahasa Arab">Bahasa Arab</option>
          <option value="Formal + Diniyah">Formal + Diniyah</option>
        </select>

        <input type="text" name="namaAyah" placeholder="Nama Ayah" onChange={handleChange} required className="input" />
        <input type="text" name="pekerjaanAyah" placeholder="Pekerjaan Ayah" onChange={handleChange} required className="input" />
        <input type="text" name="namaIbu" placeholder="Nama Ibu" onChange={handleChange} required className="input" />
        <input type="text" name="pekerjaanIbu" placeholder="Pekerjaan Ibu" onChange={handleChange} required className="input" />
        <input type="text" name="namaWali" placeholder="Nama Wali (jika bukan orang tua)" onChange={handleChange} className="input" />
        <textarea name="alamatOrtu" placeholder="Alamat Orang Tua/Wali" onChange={handleChange} required className="input" />
        <input type="tel" name="noHp" placeholder="No. HP Orang Tua/Wali" onChange={handleChange} required className="input" />

        <label className="flex items-center">
          <input type="checkbox" name="setuju" onChange={handleChange} className="mr-2" required />
          Saya menyatakan bahwa data yang saya isi adalah benar
        </label>

        <button type="submit" className="w-full bg-blue-600 py-2 rounded-xl hover:bg-blue-700">
          Kirim Formulir
        </button>
      </form>
    </div>
  );
}
