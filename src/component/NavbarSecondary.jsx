import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/hero/logoputih.png";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavbarSecondary = () => {
    const [showInput, setShowInput] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (...hashes) => hashes.some(hash => location.hash === hash);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchInput.trim() !== '') {
            navigate(`/search-results?query=${encodeURIComponent(searchInput)}`);
        }
    };

    return (
        <div className={`z-10 top-0 bg-white sticky transition-all duration-300`}>
            <div className="bg-slate-100">
                <div className="w-9/12 mx-auto h-12 flex items-center">
                    <div className="basis-1/2 flex items-center overflow-hidden">
                        <div className="w-full whitespace-nowrap animate-marquee">
                            <p className="font-light mb-2 flex items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                Kawasan Bukit Akasia Komplek Panorama Jatinangor, Cinanjung Tanjungari - Sumedang
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/2 flex justify-end items-center pr-11 space-x-4">
                        <h1 className=" italic flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-primary" />
                            <span className="">
                                <a href="tel:+6282126016965" className="text-slate-700">+62821 2601 6965</a>
                            </span>
                        </h1>
                        <h1 className="text-slate-300 italic flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary" />
                            <span className="">
                                <a href="mailto:bukitakasiaoffice@gmail.com" className="text-slate-700">bukitakasiaoffice@gmail.com</a>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`py-1 bg-primary`}>
                <div className="w-9/12 mx-auto h-12 flex items-center">
                    <div className={`w-3/12 flex items-center mx-auto transition-all duration-300`}>
                        <div className={`w-14 h-14 rounded-full justify-center flex items-center transition-all duration-300`}>
                            <img src={logo} alt="logo" className='' />
                        </div>
                    </div>
                    <div className="w-9/12 flex justify-end">
                        <nav className="w-full flex justify-evenly px-6 text-slate-300 items-center">
                            <div><HashLink smooth to="/#beranda" className="hover:text-white py-8">Beranda</HashLink></div>
                            <div className="group relative py-8">
                                <div className={` group-hover:text-white py-2 ${isActive("#tentangSekolah","#kurikulum", "#visi","#strukturOrganisasi","#prakata") ? "text-white border-b-2" : "text-slate-100"}`}>
                                    <HashLink smooth to="/tentang-page#tentangSekolah" >Tentang Kami</HashLink>
                                </div>
                                <div className="bg-secondary text-slate-100 absolute left-0 mt-3 w-80 shadow-lg transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100" style={{ backgroundColor: 'rgba(0, 59, 50, 0.9)' }}>
                                    <HashLink smooth to="/tentang-page#tentangSekolah" className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg">Tentang Sekolah</HashLink>
                                    <HashLink smooth to='/tentang-page#kurikulum' href="#" className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg">Kurikulum</HashLink>
                                    <HashLink smooth to='/tentang-page#visi' href="#" className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg">Visi dan Misi</HashLink>
                                    <HashLink smooth to='/tentang-page/#strukturOrganisasi' href="#" className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg">Struktur Organisasi</HashLink>
                                    <HashLink smooth to='/tentang-page#prakata' href="#" className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg">Prakata Kepala Sekolah</HashLink>
                                </div>
                            </div>
                            <div className="group relative py-8">
                                <HashLink smooth to="/fasilitas-page#fasilitas" href="" className={` group-hover:text-white py-2 ${isActive("#fasilitas") ? "text-white border-b-2" : "text-slate-100"}`}>Fasilitas</HashLink>
                            </div>
                            <div className="group relative py-8">
                                <HashLink smooth to={"/berita-page#berita"} href="" className={` group-hover:text-white py-2 ${isActive("#berita","#kegiatan", "#detailBerita","#detailKegiatan") ? "text-white border-b-2" : "text-slate-100"}`}>Publikasi</HashLink>
                                <div className="bg-secondary text-slate-100 absolute left-0 mt-5 w-80 shadow-lg transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100" style={{ backgroundColor: 'rgba(0, 59, 50, 0.9)' }}>
                                    <HashLink smooth to="/berita-page#berita" className="block px-4 py-4 text-slate-100 hover:bg-primary hover:shadow-lg">Berita</HashLink>
                                    <HashLink smooth to="/kegiatan-page#kegiatan" href="#" className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg">Kegiatan</HashLink>
                                </div>
                            </div>

                            <div><HashLink smooth to={"/hubungikami-page#hubungiKami"} href="" className={`group-hover:text-white py-2 ${isActive("#hubungiKami") ? "text-white border-b-2" : "text-slate-100"}`}>Hubungi Kami</HashLink></div>
                            <div className="cursor-pointer relative py-8">
                                <FontAwesomeIcon icon={faSearch} className="px-3 py-2 text-slate-300 hover:text-white" onClick={toggleInput} />
                                <div
                                    className={`absolute -left-52 mt-3 bg-primary rounded text-primari outline-none p-2 w-64 transition-all duration-300 transform ${showInput ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                        }`}
                                >
                                    <form onSubmit={handleSearchSubmit}>
                                        <input
                                            type="text"
                                            className="bg-transparent w-full outline-none px-2"
                                            placeholder="Cari..."
                                            value={searchInput}
                                            onChange={handleSearchInputChange}
                                        />
                                        <button type="submit" className="hidden">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarSecondary;
