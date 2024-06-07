// import { useState } from "react";
import NavbarSecondary from "../component/NavbarSecondary";
import Footer from "../component/Footer";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import Header from "../component/Header";
import 'lazysizes';
import { HashLink } from "react-router-hash-link";
import { ListKegiatan } from "../data/ListKegiatan";
// import news1 from '../assets/news/news1.jpg';

const KegiatanPage = () => {

    const headerKegiatan = ListKegiatan[ListKegiatan.length - 1];
    const remainingKegiatan = ListKegiatan.slice(0, -1);

    return (
        <div className="w-full">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Kegiatan' />

            {/* Section Header Berita */}
            <div className="w-9/12 mx-auto mt-20 flex justify-between space-x-8 py-8 mb-16">
                <div className="basis-1/2 w-96 h-80 border overflow-hidden shadow-lg">
                    <img src={headerKegiatan.imgSrc} alt="" className="object-cover p-4 w-full h-full" />
                </div>
                <div className="basis-1/2 flex flex-col space-y-7">
                    <h3 className="font-semibold text-orange">{headerKegiatan.date} <span className="text-primary"> | {headerKegiatan.location}</span></h3>
                    <h3 className="text-3xl">{headerKegiatan.title}</h3>
                    <p className="text-slate-500">{headerKegiatan.shortDesc} <HashLink to={`/kegiatan-page/${headerKegiatan.id}`} className="italic text-orange">Baca Selengkapnya</HashLink></p>
                </div>
            </div>
            {/* End Section Header Berita */}

            {/* Section Berita Lainnya */}
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {remainingKegiatan.map((kegiatan, index) => (
                    <div key={index} className="w-full border shadow-lg overflow-hidden">
                        <img src={kegiatan.imgSrc} alt="" className="object-cover w-full h-48" />
                        <div className="p-4">
                            <h3 className="font-semibold text-orange">{kegiatan.date} <span className="text-primary"> | {kegiatan.location}</span></h3>
                            <h3 className="text-2xl mt-2">{kegiatan.title}</h3>
                            <p className="text-slate-500 mt-4">{kegiatan.shortDesc} <HashLink to={`/kegiatan-page/${kegiatan.id}`} className="italic text-orange">Baca Selengkapnya</HashLink></p>
                        </div>
                    </div>
                ))}
            </div>
            {/* End Section Berita Lainnya */}

            <Footer />
        </div>
    );
};

export default KegiatanPage;