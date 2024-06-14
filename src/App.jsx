import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TentangPage from "./pages/TentangPage";
import BeritaPage from "./pages/BeritaPage";
import KegiatanPage from "./pages/KegiatanPage";
import FasilitasPage from "./pages/FasilitasPage";
import HubungiKamiPage from "./pages/HubungiKamiPage";
import SearchResultsPage from "./pages/SearchResultPage";
// import NotFoundPage from "./pages/NotFoundPage";
import MaintenancePage from "./pages/MaintenancePage";
import DetailBeritaPage from "./pages/DetailBeritaPage";
import DetailKegiatanPage from "./pages/DetailKegiatanPage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-page" element={<TentangPage />} />
        <Route path="/berita-page" element={<BeritaPage />} />
        <Route path="/berita-page/:id" element={<DetailBeritaPage />} />
        <Route path="/kegiatan-page" element={<KegiatanPage />} />
        <Route path="/kegiatan-page/:id" element={<DetailKegiatanPage />} />
        <Route path="/fasilitas-page" element={<FasilitasPage />} />
        <Route path="/hubungikami-page" element={<HubungiKamiPage />} />
        <Route path="/search-page" element={<SearchResultsPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;