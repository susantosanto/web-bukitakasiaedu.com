import NavbarSecondary from "../component/NavbarSecondary";
import Footer from "../component/Footer";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import Header from "../component/Header";
import 'lazysizes';
import { HashLink } from "react-router-hash-link";
import ListBerita from "../data/ListBerita";

const BeritaPage = () => {
    if (ListBerita.length === 0) {
        return <div>No Berita available.</div>;
    }

    const headerBerita = ListBerita[ListBerita.length - 1];
    const remainingBerita = ListBerita.slice(0, -1);

    return (
        <div id="berita" className="w-full">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Berita Terkini' />

            <div className="w-9/12 mx-auto mt-20 flex justify-between space-x-8 py-8 mb-16">
                <div className="basis-1/2 w-96 h-80 border overflow-hidden shadow-lg">
                    <img src={headerBerita.imgSrc} alt={headerBerita.title} className="object-cover p-4 w-full h-full" />
                </div>
                <div className="basis-1/2 flex flex-col space-y-7">
                    <h3 className="font-semibold text-orange">{headerBerita.date} <span className="text-primary"> | {headerBerita.location}</span></h3>
                    <h3 className="text-3xl">{headerBerita.title}</h3>
                    <p className="text-slate-500">{headerBerita.shortDesc} <HashLink to={`/berita-page/${headerBerita.id}`} className="italic text-orange">Baca Selengkapnya</HashLink></p>
                </div>
            </div>

            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {remainingBerita.map((berita) => (
                    <div key={berita.id} className="w-full border shadow-lg overflow-hidden">
                        <img src={berita.imgSrc} alt={berita.title} className="object-cover w-full h-48" />
                        <div className="p-4">
                            <h3 className="font-semibold text-orange">{berita.date} <span className="text-primary"> | {berita.location}</span></h3>
                            <h3 className="text-2xl mt-2">{berita.title}</h3>
                            <p className="text-slate-500 mt-4">{berita.shortDesc} <HashLink to={`/berita-page/${berita.id}`} className="italic text-orange">Baca Selengkapnya</HashLink></p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default BeritaPage;
