import { useEffect, useState } from 'react';
import NavbarSecondary from '../component/NavbarSecondary';
import Footer from '../component/Footer';
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import Header from '../component/Header';
import 'lazysizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import antarjemput from "../assets/fasilitas/antarjemput.webp";
import aula from "../assets/fasilitas/aula.webp";
import bazar from "../assets/fasilitas/bazar.webp";
import kantin from "../assets/fasilitas/kantin.webp";
import balendongan from "../assets/fasilitas/belandongan.webp";
import camping from "../assets/fasilitas/camping.webp";
import fo from "../assets/fasilitas/fo.webp";
import kelas from "../assets/fasilitas/kelas.webp";
import playground from "../assets/fasilitas/playground.webp";
import rumahkayu from "../assets/fasilitas/rumahkayu.webp";

const FasilitasPage = () => {
    const fasilitasData = [
        {
            title: "Antar Jemput",
            description: "Layanan antar jemput siswa dengan kendaraan yang nyaman dan aman.",
            image: antarjemput,
        },
        {
            title: "Aula",
            description: "Aula serbaguna yang digunakan untuk berbagai kegiatan sekolah.",
            image: aula,
        },
        {
            title: "Bazar",
            description: "Area bazar untuk kegiatan pasar amal dan bazar sekolah.",
            image: bazar,
        },
        {
            title: "Kantin",
            description: "Kantin sekolah yang menyediakan makanan sehat dan bergizi.",
            image: kantin,
        },
        {
            title: "Balendongan",
            description: "Balendongan sebagai ruang terbuka untuk belajar dan bermain.",
            image: balendongan,
        },
        {
            title: "Camping Ground",
            description: "Area camping ground untuk kegiatan alam dan outbound.",
            image: camping,
        },
        {
            title: "Front Office",
            description: "Ruang front office untuk melayani kebutuhan informasi dan administrasi.",
            image: fo,
        },
        {
            title: "Kelas",
            description: "Ruang kelas yang nyaman dan dilengkapi dengan fasilitas modern.",
            image: kelas,
        },
        {
            title: "Playground",
            description: "Playground untuk kegiatan bermain anak yang aman dan menyenangkan.",
            image: playground,
        },
        {
            title: "Rumah Kayu",
            description: "Rumah kayu sebagai ruang belajar alternatif dengan suasana alami.",
            image: rumahkayu,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fasilitasData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + fasilitasData.length) % fasilitasData.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='fasilitas' className="w-full">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Fasilitas' />

            {/* Section Fasilitas */}
            <div className="w-full mx-auto mt-10 mb-10 relative overflow-hidden">
                <div className="relative w-full h-80 md:h-screen flex items-center justify-center">
                    {fasilitasData.map((fasilitas, index) => (
                        <div
                            key={index}
                            className={`slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                data-src={fasilitas.image}
                                className="lazyload w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                alt={fasilitas.title}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
                                <h2 className="text-xl md:text-4xl font-bold text-white mb-2 lg:pt-0 pt-12">{fasilitas.title}</h2>
                                <p className="text-sm md:text-lg text-white">{fasilitas.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 p-2 md:p-3 text-white text-lg md:text-xl transition bg-primary rounded-full hover:bg-secondary"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 p-2 md:p-3 text-white text-lg md:text-xl transition bg-primary rounded-full hover:bg-secondary"
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            {/* End Section Fasilitas */}

            <Footer />
        </div>
    );
};

export default FasilitasPage;
