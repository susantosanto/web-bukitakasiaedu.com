import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import NavbarSecondary from "./NavbarSecondary";

export default function AddArticle() {
  const navigate = useNavigate()
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [articleData, setArticleData] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    shortdesc: "",
    longdesc: "",
    file: "",
    sourceimg: "",
    linkdocumentation: "",
    quote: "",
  });

  console.log("data article nihh bro: ", articleData)

  const handleCodeChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleAccessSubmit = (e) => {
    e.preventDefault();
    const accessCode = "428735"; 
    if (inputCode === accessCode) {
      setIsAccessGranted(true);
    } else {
      alert("Kode akses salah! Silahkan coba lagi");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setArticleData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const file = articleData.file;
      if (!file) {
        return alert("Silahkan upload gambar sebagai thumbnail");
      }
  
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ARTICLE_AKASIA");
  
      const resImg = await fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });
  
      if (!resImg.ok) return alert("Gagal mengupload foto");
  
      const img = await resImg.json();
  
      const formattedDate = new Date(articleData.date);
      const formattedDateString = new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(formattedDate);
  
      const updateArticleData = {
        ...articleData,
        file: img.secure_url,
        date: formattedDateString, 
      };
  
      const res = await addDoc(collection(db, "articles"), {
        ...updateArticleData,
        createdAt: new Date(),
      });
  
      if (!res) return alert("Gagal mengupload artikel");
  
      console.log("Data artikel yang di-upload ke database: ", res);
  
      alert("Artikel berhasil diunggah!");
  
      navigate("/#dashboard");
  
      setArticleData({
        title: "",
        category: "",
        location: "",
        date: "",
        shortdesc: "",
        longdesc: "",
        file: "",
        sourceimg: "",
        linkdocumentation: "",
        quote: "",
        publishedBy: '',
      });
    } catch (error) {
      console.log("Errornya: ", error);
      alert("Terjadi kesalahan saat mengunggah artikel.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
    <NavbarSecondary />
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center p-4">
      {!isAccessGranted ? (
        <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96">
          <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Masukkan Kode Akses</h1>
          <form onSubmit={handleAccessSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700">Kode Akses</label>
              <input
                type="text"
                id="accessCode"
                value={inputCode}
                onChange={handleCodeChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Masukkan kode akses"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Masuk
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Form Unggah Artikel</h1>
          <form onSubmit={handleArticleSubmit} className="space-y-6">
            {/* Title and Category Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Judul Artikel</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={articleData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan judul artikel"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategori</label>
                <select
                  id="category"
                  name="category"
                  value={articleData.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="" disabled>Pilih Kategori</option>
                  <option value="Berita">Berita</option>
                  <option value="Kegiatan">Kegiatan</option>
                </select>
              </div>
            </div>

            {/* Location and Date Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Lokasi</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={articleData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan lokasi"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Tanggal</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={articleData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            {/* Short and Long Description Fields */}
            <div className="space-y-4">
              <div className="w-full">
                <label htmlFor="shortdesc" className="block text-sm font-medium text-gray-700">Deskripsi Singkat</label>
                <input
                  type="text"
                  id="shortdesc"
                  name="shortdesc"
                  value={articleData.shortdesc}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan deskripsi singkat"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="longdesc" className="block text-sm font-medium text-gray-700">Deskripsi Lengkap</label>
                <textarea
                  id="longdesc"
                  name="longdesc"
                  value={articleData.longdesc}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan deskripsi lengkap"
                  rows={4}
                  required
                />
              </div>
            </div>

            {/* Image and Documentation Link Fields */}
            <div className="space-y-4">
              <div className="w-full">
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">Foto Thumbnail</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="sourceimg" className="block text-sm font-medium text-gray-700">Link Sumber Gambar</label>
                <input
                  type="url"
                  id="sourceimg"
                  name="sourceimg"
                  value={articleData.sourceimg}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan link sumber gambar"
                />
              </div>

              <div className="w-full">
                <label htmlFor="linkdocumentation" className="block text-sm font-medium text-gray-700">Link Dokumentasi</label>
                <input
                  type="url"
                  id="linkdocumentation"
                  name="linkdocumentation"
                  value={articleData.linkdocumentation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan link dokumentasi"
                />
              </div>
            </div>

            {/* Quote Field */}
            <div className="w-full">
              <label htmlFor="quote" className="block text-sm font-medium text-gray-700">Kata-Kata (Quote)</label>
              <input
                type="text"
                id="quote"
                name="quote"
                value={articleData.quote}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Masukkan kutipan"
              />
            </div>
            <div className="w-full">
              <label htmlFor="publishedBy" className="block text-sm font-medium text-gray-700">Published By</label>
              <input
                type="text"
                id="publishedBy"
                name="publishedBy"
                value={articleData.publishedBy}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Di Publikasikan Oleh"
                required
              />
            </div>

            {/* Submit Button */}
            <button
  type="submit"
  className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center"
>
  {isLoading ? (
    <>
      <svg
        className="animate-spin mr-3 w-5 h-5 text-white" // Menggunakan ukuran dan warna yang sesuai
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
          fill="currentColor"
        />
      </svg>
      <p>Processing...</p>
    </>
  ) : (
    <p>Unggah Artikel</p>
  )}
</button>


          </form>
        </div>
      )}
    </div>
    </>
  );
}
