import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faTag, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Footer from "../component/Footer";
import Header from "../component/Header";
import NavbarSecondary from "../component/NavbarSecondary";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import ListBerita from '../data/ListBerita';
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const DetailBeritaPage = () => {
    const { id } = useParams();
    const berita = ListBerita.find((item) => item.id === parseInt(id, 10));

    if (!berita) {
        return <div className='font-semibold text-orange text-center'>Berita not found.</div>;
    }

    return (
        <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Detail Berita' />

            <div className="w-9/12 mx-auto mt-10 flex flex-col py-8 mb-16">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                    <img src={berita.imgSrc} alt={berita.title} className="w-full h-96 object-cover" />
                    <div className="p-20">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{berita.title}</h1>
                        <div className="flex items-center space-x-6 text-gray-500 mb-6">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500" />
                                <span>{berita.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faTag} className="text-orange-500" />
                                <span>{berita.category}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500" />
                                <span>{berita.location}</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap text-justify">{berita.longDesc}</p>
                        <p className="text-slate-500 mt-4 text-right"><HashLink smooth to={`/berita-page#berita`} className="text-orange"><FontAwesomeIcon icon={faLeftLong} className="text-orange-500" /> Kembali</HashLink></p>
                        <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img src="/path/to/author/image.jpg" alt="Author" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="text-sm text-gray-700 font-semibold">Written by John Doe</p>
                                    <p className="text-sm text-gray-500">Journalist at SD Alam Bukit Akasia</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                Published on {berita.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DetailBeritaPage;
