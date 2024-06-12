// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faMapMarkerAlt, faTag, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Footer from "../component/Footer";
import Header from "../component/Header";
import NavbarSecondary from "../component/NavbarSecondary";
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import {ListKegiatan} from '../data/ListKegiatan';
import { useParams } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import ScroolToTop from '../component/ScroolToTop';
import DetailNews from "../component/DetailNews";

const DetailKegiatanPage = () => {
    const { id } = useParams();
    const kegiatan = ListKegiatan.find(item => item.id === parseInt(id));

    if (!kegiatan) {
        return <div className='font-semibold text-orange text-center'>Kegiatan not found.</div>;
    }

    return (
        <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Detail Kegiatan' />

            <DetailNews
                newsCategory={kegiatan.category}
                newsDate={kegiatan.date}
                newsImg={kegiatan.imgSrc}
                newsLocation={kegiatan.location}
                newsLongDesc={kegiatan.longDesc}
                newsTitle={kegiatan.title}
            />

            <Footer />
            <ScroolToTop/>
        </div>
    );
};

export default DetailKegiatanPage;
