import React, { useState, useEffect } from "react";
import ListBerita from "../data/ListBerita.jsx"; // Mengimpor ListBerita
import { ListKegiatan } from "../data/ListKegiatan.jsx";
import NewsItem from "./NewsItem.jsx";  // Mengimpor NewsItem

const News = () => {
  const [berita, setBerita] = useState([]);  // State untuk menyimpan berita
  const [kegiatan, setKegiatan] = useState([]);  // State untuk menyimpan kegiatan

  // Mengambil data berita saat komponen pertama kali di-render
  useEffect(() => {
    const fetchData = async () => {
      const beritaData = await ListBerita(); // Menunggu hasil dari ListBerita
      const kegiatanData = ListKegiatan; // Kamu bisa menyesuaikan ini jika ListKegiatan asinkron
      setBerita(beritaData);  // Menyimpan berita dalam state
      setKegiatan(kegiatanData);  // Menyimpan kegiatan dalam state
    };

    fetchData();  // Memanggil fetchData
  }, []);  // Efek ini hanya dipanggil sekali saat komponen pertama kali dimuat

  // Memastikan data sudah ada sebelum mencoba diakses
  if (!berita.length || !kegiatan.length) {
    return <div>Loading...</div>;  // Menampilkan loading jika data belum tersedia
  }

  console.log("beritanya nihh bro: ", berita)

  // Mengambil berita dan kegiatan terakhir
  const headerBerita = berita[berita.length - 1];
  const lastBerita = berita[berita.length - 2];
  const headerKegiatan = kegiatan[kegiatan.length - 1];
  const lastKegiatan = kegiatan[kegiatan.length - 2];

  return (
    <div className="bg-slate-100 min-h-screen -mt-52 p-10">
      <div className="w-12/12 lg:w-8/12 mx-auto flex flex-col items-center overflow-hidden">
        <div className="text-center mb-10">
          <h1 className="text-primary text-4xl">BERITA & ACARA TERKINI</h1>
        </div>
        <div className="flex flex-col">
          {/* Menampilkan item berita dan kegiatan */}
          <NewsItem {...headerBerita} />
          <NewsItem {...headerKegiatan} />
          <NewsItem {...lastBerita} />
          <NewsItem {...lastKegiatan} />
        </div>
      </div>
    </div>
  );
};

export default News;
