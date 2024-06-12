import { useState } from "react";
import NavbarSecondary from "../component/NavbarSecondary";
import Footer from "../component/Footer";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import Header from "../component/Header";
import imgTentang from "../assets/tentang/img1.webp";
import 'lazysizes';
import { DataMetodePembelajaran } from "../data/DataMetodePembelajaran";
import fotoks from "../assets/tentang-page/kepalasekolah.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandsHelping, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { DataGuru } from '../data/DataGuru';
import { HashLink } from "react-router-hash-link";
import { DataPengurus } from "../data/DataPengurus";

const TentangPage = () => {

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % DataMetodePembelajaran.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + DataMetodePembelajaran.length) % DataMetodePembelajaran.length);
    };


    const [selectedSection, setSelectedSection] = useState('prakata-sekolah');

    return (
        <div id="tentangSekolah" className="w-full">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Tentang Kami' />

            {/* Section Tentang Sekolah */}
            <div className="lg:w-9/12 w-10/12 mx-auto lg:mt-20 mt-10">
                <div className="flex flex-col space-y-4 mb-10">
                    <h1 className="text-slate-700 lg:text-4xl text-2xl">SD Alam Bukit Akasia</h1>
                    <blockquote className="italic text-slate-500 text-md border-l-4 border-green-500 pl-4">
                        &ldquo;Sayangi Bumi maka Langit Menyayangimu&rdquo;
                    </blockquote>
                </div>
                <div className="lg:hidden mb-8 flex-col">
                    <div className="w-full h-96 p-3 overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <img src={imgTentang} className="object-cover w-full h-full lazyload" alt="Tentang Kami" />
                    </div>
                    <div className="mt-14 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <HashLink smooth to='/fasilitas-page#fasilitas' className="py-2 px-4 text-sm bg-primary rounded-full font-semibold shadow-lg text-white">
                            Fasilitas di SD Alam Bukit Akasia
                            <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
                        </HashLink>
                    </div>
                </div>
                <div className="lg:flex lg:space-x-10">
                    <div className="lg:basis-1/2 text-slate-500 text-justify flex flex-col space-y-5">
                        <p>
                            Setiap anak cerdas pada bidangnya. Menjadi tantangan orangtua agar sejak dini menemukan keunggulan putra-putrinya. SD Alam Bukit Akasia menerapkan metode montessori Kapal Pecah (Kapsul Alur Permainan Bocah) yang menerapkan pemahaman kecerdasan majemuk pada setiap pelaksanaan kegiatan belajar.
                        </p>
                        <p>
                            Tidak ada siswa yang tak pintar. Sebab mereka akan menjadi bintang di empat Kapsul (kelas tematik) yang mereka ikuti, setiap hari.
                        </p>
                        <p>
                            Kapsul yang penuh keseruan dan menantang itu adalah, Kapsul Ilmuwan, Kapsul Seniman, Kapsul Pencerita, dan Kapsul Teknokrat.
                        </p>
                        <p>
                            Mengeksplorasi kawasan Bukit Akasia seluas 5 hektare, meliputi peternakan, perkebunan, Bazar Gantoeng, Camping Ground, SD Alam Bukit Akasia akan memberikan pengalaman belajar yang penuh petualangan, aman, dan mencerdaskan.
                        </p>
                        <p>
                            SD Alam Bukit Akasia tetap menerapkan Kurikulum Nasional namun menyampaikannya dengan metode khas Bukit Akasia. Kami menggabungkan pemahaman kecerdasan majemuk, metode montessori, dan pembelajaran berbasis alam.
                        </p>
                    </div>
                    <div className="lg:basis-1/2 hidden lg:flex flex-col">
                        <div className="w-full h-96 p-3 overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                            <img src={imgTentang} className="object-cover w-full h-full lazyload" alt="Tentang Kami" />
                        </div>
                        <div className="mt-14 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                            <HashLink smooth to='/fasilitas-page#fasilitas' className="py-3 px-4 text-sm bg-primary rounded-full font-bold shadow-lg text-white">
                                Jelajahi Fasilitas di SD Alam Bukit Akasia
                                <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section Tentang Sekolah */}

            {/* Section Kurikulum */}
            <div id="kurikulum" className="py-14">
                <div className="lg:w-9/12 w-10/12 mx-auto">
                    <div className="mb-8 border-b border-orange">
                        <h2 className="text-3xl text-slate-800 pb-8">Kurikulum Kami</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:space-x-10 mb-10">
                        <div className="flex-1">
                            <p className="text-slate-500 text-justify">
                                SD Alam Bukit Akasia menerapkan Kurikulum Nasional yang dirancang untuk memenuhi standar pendidikan yang berlaku di Indonesia. Kurikulum ini memastikan bahwa setiap siswa mendapatkan pembelajaran yang komprehensif dan terstruktur dalam berbagai mata pelajaran.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl text-slate-800">Metode Pembelajaran Kapal Pecah</h3>
                    </div>
                    <div className="mb-10 flex flex-col space-y-6">
                        <p className="text-slate-500 text-justify">
                            Metode Kapal Pecah menawarkan kepada Ayah Bunda, agar kita belajar kembali pada kearifan nenek moyang saat menyampaikan berbagai nilai dan membentuk karakter anak bangsa selama bergenerasi-generasi melalui aktivitas bercerita.
                        </p>
                        <p className="text-slate-500 text-justify">
                            Banyak aktivitas yang mungkin akan membuat rumah tampak seperti kapal pecah. Tetapi itu akan sepadan dengan keseruan yang akan dialami anak-anak dan keterserapan materi yang Ayah Bunda inginkan.
                        </p>
                        <p className="text-slate-500 text-justify">
                            Metode ini bahkan mengadaptasi kurikulum nasional untuk memastikan setiap aktivitas dalam &ldquo;Kapal Pecah&ldquo; memang mempunyai arah yang terukur sesuai usia perkembangan. Montessori Kapal Pecah mempunyai empat kapsul imajinasi yang masing-masing akan menjadi tempat anak-anak menyerap berbagai pengetahuan, keterampilan, pemahaman, lewat aktivitas khas yaitu:
                        </p>
                    </div>
                    <div className="overflow-hidden hidden lg:flex">
                        <div className="object-cover mx-auto">
                            <div className="flex p-3 justify-between space-x-3 mb-2">
                                {DataMetodePembelajaran.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`py-2 text-sm px-11  rounded-full transform transition duration-500 hover:scale-105 cursor-pointer ${index === activeSlide ? 'bg-primary text-slate-100' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => setActiveSlide(index)}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="lg:flex">
                        <div className="lg:basis-1/2 overflow-hidden">
                            <div
                                className="whitespace-nowrap transition duration-200"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {DataMetodePembelajaran.map((slide, index) => (
                                    <div key={index} className="inline-block w-full lg:p-3">
                                        <div className="relative w-full h-80 mb-12 shadow-lg p-3">
                                            <img
                                                className="w-full h-full object-cover object-center lazyload"
                                                src={slide.imgSrc}
                                                alt={slide.title}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex -mt-10 mb-3 justify-center space-x-4 items-center lg:hidden">
                                <button
                                    onClick={prevSlide}
                                    className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} className=" text-center" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faAngleRight} className="text-center" />
                                </button>
                            </div>
                        </div>
                        <div className="lg:basis-1/2 overflow-hidden">
                            <div
                                className="whitespace-nowrap transition duration-200"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {DataMetodePembelajaran.map((slide, index) => (
                                    <div key={index} className="inline-block w-full lg:p-3">
                                        <div className="p-3 overflow-hidden flex flex-col space-y-5">
                                            <h4 className="font-bold text-xl">{slide.title}</h4>
                                            <p className="text-slate-600 text-justify text-wrap">{slide.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* End Section Kurikulum */}



            {/* Section Visi Misi */}
            <div id="visi" className="p-5 lg:-mb-20 mb-20 min-h-screen flex items-center justify-center bg-white">
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg lg:h-96">
                        <FontAwesomeIcon icon={faLeaf} className="lg:text-5xl text-4xl text-primary mb-4 animate-bounce" />
                        <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 mb-2">VISI</h3>
                        <p className="text-gray-600 leading-relaxed text-center">
                            Menyelenggarakan proses pendidikan “kembali ke alam” berspirit Qur&apos;ani yang mengoptimalisasi kecerdasan majemuk (aneka bakat) sebagai fokus pengembangan pengetahuan dan keterampilan spesifik peserta didik dengan tetap membekalkan keterampilan dasar (hard skill) sebagai modal bertahan hidup pada masa depan mereka.
                        </p>
                    </div>

                    <div className={`relative flex flex-col items-center bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg ${showMore ? 'h-auto' : 'lg:h-96'} overflow-hidden`}>
                        <FontAwesomeIcon icon={faHandsHelping} className="lg:text-5xl text-xl text-primary mb-4 animate-bounce" />
                        <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 mb-2">MISI</h3>
                        <p className="text-gray-600 leading-relaxed text-center mb-4">
                            Misi Lembaga Pendidikan Sekolah Dasar Alam Bukit Akasia untuk mencapai visi adalah:
                        </p>
                        {!showMore && (
                            <div className="bottom-6">
                                <ul className="list-disc list-inside text-gray-600 space-y-2 text-left max-w-lg">
                                    <li>Menerapkan metode “Hari-hari Bercerita” untuk mengaplikasikan kurikulum nasional.</li>
                                    <li>Mengoneksikan spirit Qur&apos;ani pada setiap bidang studi.</li>
                                </ul>
                                <button onClick={toggleShowMore} className="mt-4 text-primary underline flex mx-auto">Selengkapnya</button>
                            </div>
                        )}
                        {showMore && (
                            <div className="mt-4">
                                <ul className="list-disc list-inside text-gray-600 space-y-2 text-left max-w-lg">
                                    <li>Menerapkan metode “Hari-hari Bercerita” untuk mengaplikasikan kurikulum nasional.</li>
                                    <li>Mengoneksikan spirit Qur&apos;ani pada setiap bidang studi.</li>
                                    <li>Mengelaborasi lingkungan alam pada praktik pembelajaran.</li>
                                    <li>Mengenalkan peserta didik dengan keterampilan menanam, merawat, mengelola lingkungan (berkebun, beternak, penanaman pohon, dll.)</li>
                                    <li>Menghidupkan kembali berbagai permainan tradisional untuk menguatkan karakter keindonesiaan.</li>
                                    <li>Menjadikan masyarakat sekitar sebagai “guru” berbagai bidang keahlian.</li>
                                    <li>Menjadikan peserta didik menjadi pedagang hasil tangguh (self-sufficient) yang mampu mengelola lingkungan dengan sehat.</li>
                                    <li>Menanamkan jiwa wirausaha yang sesuai dengan ajaran Qur&apos;an.</li>
                                </ul>
                                <button onClick={toggleShowMore} className="mt-4 text-primary underline flex mx-auto">Tampilkan lebih sedikit</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* End Section Visi Misi */}

            {/* Section Struktur Organisasi */}
            <div id="strukturOrganisasi" className="w-10/12 lg:w-9/12 mx-auto py-10">
                <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-x-10 lg:space-y-0 h-auto lg:h-96">
                    <div className="text-slate-500 text-justify flex flex-col space-y-3">
                        <h1 className="text-2xl lg:text-3xl text-slate-700 mb-5 pb-8 border-b border-orange">Struktur Organisasi</h1>
                        <p>Sekolah Dasar Alam Bukit Akasia dipimpin oleh Pengurus Yayasan yang berdedikasi, kepala sekolah yang berpengalaman, dan tim pendidik yang kompeten di bawah arahan Pembina Yayasan dan diawasi oleh Pengawas Yayasan.</p>
                        <p>Mereka bekerja sama untuk memastikan bahwa setiap siswa SD Alam Bukit Akasia mendapatkan pendidikan yang berkualitas tinggi, memuaskan, konsisten, dan sesuai.</p>
                    </div>
                </div>

                <div id="prakata" className="mt-10">
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-16">
                        <button
                            className={`py-2 px-4 rounded-full transform transition duration-500 hover:scale-105 cursor-pointer ${selectedSection === "pengurus-yayasan" ? "bg-primary text-white" : "bg-gray-300 text-gray-700"}`}
                            onClick={() => setSelectedSection('pengurus-yayasan')}
                        >
                            Pengurus Yayasan
                        </button>
                        <button
                            className={`py-2 px-4 rounded-full transform transition duration-500 hover:scale-105 cursor-pointer ${selectedSection === "prakata-sekolah" ? "bg-primary text-white" : "bg-gray-300 text-gray-700"}`}
                            onClick={() => setSelectedSection('prakata-sekolah')}
                        >
                            Prakata Kepala Sekolah
                        </button>
                        <button
                            className={`py-2 px-4 rounded-full transform transition duration-500 hover:scale-105 cursor-pointer ${selectedSection === "tim-pendidik" ? "bg-primary text-white" : "bg-gray-300 text-gray-700"}`}
                            onClick={() => setSelectedSection('tim-pendidik')}
                        >
                            Tim Pendidik
                        </button>
                    </div>

                    {selectedSection === "pengurus-yayasan" && (
                        <div id="pengurus-yayasan" className="bg-white p-5 lg:p-10 shadow-lg rounded-lg">
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 mb-7">Pengurus Yayasan</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {DataPengurus.map((pengurus, index) => (
                                    <div
                                        key={index}
                                        className="bg-white w-full rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                                    >
                                        <div className="relative w-full h-80 overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <img
                                                    className="h-full w-full object-cover lazyload"
                                                    src={pengurus.image}
                                                    alt={pengurus.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{pengurus.name}</h2>
                                            <p className="text-gray-600 text-xl">{pengurus.title}</p>
                                            <p className="mt-4 text-sm text-justify text-gray-600">{pengurus.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedSection === "prakata-sekolah" && (
                        <div id="prakata-sekolah" className="bg-white p-5 lg:p-10 flex flex-col lg:flex-row shadow-lg rounded-lg mb-16 transition-all duration-500">
                            <div className="basis-full lg:basis-1/2 flex items-center justify-center overflow-hidden">
                                <div className="p-3 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                                    <img src={fotoks} className="object-cover w-full h-full object-top lazyload rounded-lg" alt="Kepala Sekolah" />
                                </div>
                            </div>
                            <div className="basis-full lg:basis-1/2 lg:pl-8 pt-8 mb-8 lg:mb-0 flex flex-col justify-center">
                                <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 mb-6 lg:mb-10 transition-colors duration-500 hover:text-primary">Prakata Kepala Sekolah</h2>
                                <p className="text-slate-500 mb-4 text-justify leading-relaxed">
                                    “Belajar yang efektif terjadi ketika anak bereksplorasi. Setiap pengetahuan diperoleh lewat pengalaman nyata bukan hafalan semata. Sekolah Dasar Alam Bukit Akasia sejak semula berkomitmen tinggi untuk melibatkan peserta didik dalam aneka kegiatan harian yang eksploratif sebagai media penyampaian berbagai mata pelajaran. Alih-alih merasa tertekan oleh beban pembelajaran, peserta didik akan mengalami sendiri berbagai kegiatan memperoleh pengetahuan itu. Setiap peserta didik memiliki kesempatan yang sama sesuai kecerdasan spesifiknya untuk berkembang dan merdeka. Dengan begitu, tujuan pendidikan agar setiap anak selamat dan bahagia seperti yang diajarkan Ki Hajar Dewantara akan terwujud”.
                                </p>
                            </div>
                        </div>

                    )}

                    {selectedSection === "tim-pendidik" && (
                        <div id="tim-pendidik" className="bg-white p-5 lg:p-10 shadow-lg rounded-lg">
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 mb-7">Tim Pendidik</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {DataGuru.map((guru, index) => (
                                    <div
                                        key={index}
                                        className="bg-white w-full rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                                    >
                                        <div className="relative w-full h-80 overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <img
                                                    className="h-full w-full object-cover lazyload"
                                                    src={guru.image}
                                                    alt={guru.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{guru.name}</h2>
                                            <p className="text-gray-600 text-xl">{guru.title}</p>
                                            <p className="mt-4 text-sm text-justify text-gray-600">{guru.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* End Section Struktur Organisasi */}

            <Footer />
        </div>
    );
};

export default TentangPage;