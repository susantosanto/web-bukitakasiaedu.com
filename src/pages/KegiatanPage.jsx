// KegiatanPage.jsx

import NavbarSecondary from "../component/NavbarSecondary";
import Footer from "../component/Footer";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import Header from "../component/Header";
import 'lazysizes';
import { HashLink } from "react-router-hash-link";
import ListKegiatan from "../data/ListKegiatan";  // Pastikan sesuai dengan cara ekspor
import ScroolToTop from "../component/ScroolToTop";

const KegiatanPage = () => {
    // Pastikan ListKegiatan dipanggil sebagai fungsi untuk mendapatkan list kegiatan
    const kegiatanList = ListKegiatan();  // Memanggil fungsi ListKegiatan untuk mendapatkan data

    const headerKegiatan = kegiatanList[kegiatanList.length - 1];
    const remainingKegiatan = kegiatanList.slice(0, -1);

    return (
        <div className="w-full">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Kegiatan' />

            {/* Section Header Kegiatan */}
            <div className="w-10/12 md:w-9/12 mx-auto mt-10 md:mt-20 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 py-8 mb-16">
                <div className="basis-1/2 w-full md:w-96 h-48 md:h-80 border overflow-hidden shadow-lg">
                    <img src={headerKegiatan.imgSrc} alt="" className="object-cover p-4 w-full h-full" />
                </div>
                <div className="basis-1/2 flex flex-col space-y-4 md:space-y-7">
                    <h3 className="font-semibold text-orange text-sm md:text-base">{headerKegiatan.date} <span className="text-primary"> | {headerKegiatan.location}</span></h3>
                    <h3 className="text-2xl md:text-3xl">{headerKegiatan.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base">{headerKegiatan.shortDesc} <HashLink to={`/kegiatan/${headerKegiatan.id}`} className="italic text-orange">Baca Selengkapnya</HashLink></p>
                </div>
            </div>
            {/* End Section Header Kegiatan */}

            {/* Section Kegiatan Lainnya */}
            <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {remainingKegiatan.map((kegiatan, index) => (
                    <div key={index} className="w-full border shadow-lg overflow-hidden">
                        <img src={kegiatan.imgSrc} alt="" className="object-cover w-full h-48" />
                        <div className="p-4">
                            <h3 className="font-semibold text-orange text-sm md:text-base">{kegiatan.date} <span className="text-primary"> | {kegiatan.location}</span></h3>
                            <h3 className="text-sm md:text-base mt-2">{kegiatan.title}</h3>
                            <p className="text-slate-500 text-sm md:text-base mt-4">{kegiatan.shortDesc} <HashLink to={`/kegiatan/${kegiatan.id}`} className="italic text-orange">Baca Selengkapnya</HashLink></p>
                        </div>
                    </div>
                ))}
            </div>
            {/* End Section Kegiatan Lainnya */}

            <Footer />
            <ScroolToTop />
        </div>
    );
};

export default KegiatanPage;
