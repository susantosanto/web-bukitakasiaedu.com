// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faMapMarkerAlt, faTag, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Footer from "../component/Footer";
import Header from "../component/Header";
import NavbarSecondary from "../component/NavbarSecondary";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import ListBerita from '../data/ListBerita';
import { useParams } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import ScroolToTop from '../component/ScroolToTop';
import DetailNews from '../component/DetailNews';

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

            <DetailNews
                newsCategory={berita.category}
                newsDate={berita.date}
                newsImg={berita.imgSrc}
                newsLocation={berita.location}
                newsLongDesc={berita.longDesc}
                newsTitle={berita.title}
            />

            <Footer />
            <ScroolToTop />
        </div>
    );
};

export default DetailBeritaPage;
