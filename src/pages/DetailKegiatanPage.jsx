// DetailKegiatanPage.jsx

import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import NavbarSecondary from "../component/NavbarSecondary";
import bannerTentang from "../assets/tentang-page/hasilbelajar.webp";
import ListKegiatan from "../data/ListKegiatan"; // Default import
import ScroolToTop from "../component/ScroolToTop";
import DetailNews from "../component/DetailNews";

const DetailKegiatanPage = () => {
  const { id } = useParams();
  const kegiatanList = ListKegiatan();
  const kegiatan = kegiatanList.find((item) => item.id === id);

  if (!kegiatan) {
    return (
      <div className="font-semibold text-orange text-center">
        Kegiatan not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200">
      <NavbarSecondary />
      <Header topBanner={bannerTentang} title="Detail Kegiatan" />
      <DetailNews
        newsCategory={kegiatan.category}
        newsDate={kegiatan.date}
        newsImg={kegiatan.file}
        newsLocation={kegiatan.location}
        newsLongDesc={kegiatan.longdesc}
        newsTitle={kegiatan.title}
        linkDocumentation={kegiatan.linkdocumentation}
        publishedBy={kegiatan.publishedBy}
      />
      <Footer />
      <ScroolToTop />
    </div>
  );
};

export default DetailKegiatanPage;
