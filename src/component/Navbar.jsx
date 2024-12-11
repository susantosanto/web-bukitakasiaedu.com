import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/hero/logoputih.png";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTentangDropdownOpen, setIsTentangDropdownOpen] = useState(false);
  const [isPublikasiDropdownOpen, setIsPublikasiDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+62182126016965", "_blank");
  };

  const isActive = (...hashes) => hashes.some((hash) => location.hash === hash);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchInput.trim() !== "") {
      navigate(`/search-results?query=${encodeURIComponent(searchInput)}`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTentangDropdown = () => {
    setIsTentangDropdownOpen(!isTentangDropdownOpen);
  };

  const togglePublikasiDropdown = () => {
    setIsPublikasiDropdownOpen(!isPublikasiDropdownOpen);
  };

  const width = window.innerWidth;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [width]);

  return (
    <div
      className={`z-10 top-0 bg-transparent transition-all duration-300 w-full ${
        isScrolled ? "fixed" : "sticky"
      }`}
    >
      <div
        className={`${isScrolled ? "bg-slate-100 hidden lg:flex" : "hidden"}`}
      >
        <div className="w-9/12 mx-auto h-12 flex items-center justify-between" id="location">
  {isScrolled && (
    <div className="basis-1/2 hidden lg:flex items-center overflow-x-hidden max-w-full w-4/12">
      <a href="https://maps.app.goo.gl/cSmCUJzwYKUscCnTA" className="whitespace-nowrap animate-marquee">
        <p className="font-light mb-2 flex items-center text-xs sm:text-sm">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          Kawasan Bukit Akasia Komplek Panorama Jatinangor, Cinanjung Tanjungari - Sumedang
        </p>
      </a>
    </div>
          )}
          <div className="basis-1/2 flex justify-center items-center space-x-2 sm:space-x-4 text-xs sm:text-sm w-8/12">
            <h1 className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-primary" />
              <span className="">
                <button
                  onClick={handleWhatsAppClick}
                  href="tel:+6282126016965"
                  className="text-slate-700"
                >
                  +62821 2601 6965
                </button>
              </span>
            </h1>
            <h1 className="hidden lg:flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-primary"
              />
              <span className="">
                <a
                  href="mailto:bukitakasiaoffice@gmail.com"
                  className="text-slate-700"
                >
                  bukitakasiaoffice@gmail.com
                </a>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`py-1 ${isScrolled ? "bg-primary" : "bg-transparent mt-10"}`}
      >
        <div className="w-10/12 mx-auto h-12 flex items-center">
          <div
            className={`w-3/12 flex items-center mx-auto transition-all duration-300 ${
              isScrolled ? "mt-0" : "mt-14"
            }`}
          >
            <div
              className={`w-52 h-52 rounded-full justify-center flex items-center transition-all duration-300 ${
                isScrolled ? "" : "w-20 h-20 -mt-16 lg:mt-0 lg:w-52 lg:h-52"
              }`}
            >
              <a href="/" className="w-auto h-auto">
              <img
                src={logo}
                alt="logo"
                className={`${isScrolled ? "w-12 h-12" : "w-22 h-18 mt-3"}`}
              />
              </a>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <nav className="w-full justify-between text-slate-300 items-center hidden lg:flex">
              <div>
                <HashLink
                  smooth
                  to="/#beranda"
                  className={`group-hover:text-white py-2 ${
                    isActive("#beranda") ? "text-white" : "text-slate-100"
                  }`}
                >
                  Beranda
                </HashLink>
              </div>
              <div className="group relative py-8">
                <div className="group-hover:text-white">
                  <HashLink smooth to="/tentang#tentangSekolah">
                    Tentang Kami
                  </HashLink>
                </div>
                <div
                  className="bg-secondary text-slate-100 absolute left-0 mt-5 w-80 shadow-lg transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100"
                  style={{ backgroundColor: "rgba(0, 59, 50, 0.9)" }}
                >
                  <HashLink
                    smooth
                    to="/tentang#tentangSekolah"
                    className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg"
                  >
                    Tentang Sekolah
                  </HashLink>
                  <HashLink
                    smooth
                    to="/tentang#kurikulum"
                    className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg"
                  >
                    Kurikulum
                  </HashLink>
                  <HashLink
                    smooth
                    to="/tentang#visi"
                    className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg"
                  >
                    Visi dan Misi
                  </HashLink>
                  <HashLink
                    smooth
                    to="/tentang#strukturOrganisasi"
                    className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg"
                  >
                    Struktur Organisasi
                  </HashLink>
                  <HashLink
                    smooth
                    to="/tentang#prakata"
                    className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg"
                  >
                    Prakata Kepala Sekolah
                  </HashLink>
                </div>
              </div>
              <div className="group relative py-8">
                <HashLink
                  smooth
                  to="/fasilitas#fasilitas"
                  className="hover:text-white"
                >
                  Fasilitas
                </HashLink>
              </div>
              <div className="group relative py-8">
                <HashLink
                  smooth
                  to={"/berita#berita"}
                  className="hover:text-white"
                >
                  Publikasi
                </HashLink>
                <div
                  className="bg-secondary text-slate-100 absolute left-0 mt-5 w-80 shadow-lg transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100"
                  style={{ backgroundColor: "rgba(0, 59, 50, 0.9)" }}
                >
                  <HashLink
                    smooth
                    to="/berita#berita"
                    className="block px-4 py-4 text-slate-100 hover:bg-primary hover:shadow-lg w-full"
                  >
                    Berita
                  </HashLink>
                  <HashLink
                    smooth
                    to="/kegiatan#kegiatan"
                    className="block px-4 py-3 text-slate-100 hover:bg-primary hover:shadow-lg w-full"
                  >
                    Kegiatan
                  </HashLink>
                </div>
              </div>
              <div>
                <HashLink
                  smooth
                  to={"/hubungikami#hubungiKami"}
                  className="hover:text-white py-8"
                >
                  Hubungi Kami
                </HashLink>
              </div>
              <div className="cursor-pointer relative py-8">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="px-3 py-2 text-slate-300 hover:text-white"
                  onClick={toggleInput}
                />
                <div
                  className={`absolute -left-52 mt-3 bg-primary rounded text-primari outline-none p-2 w-64 transition-all duration-300 transform ${
                    showInput ? "scale-100 opacity-100" : "scale-95 opacity-0"
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
                    <button type="submit" className="hidden">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 cursor-pointer hidden lg:block">
                <a href="https://docs.google.com/forms/d/1v4jGEnYmL9QreaFEl6NktSdk3sxb2h91-WQF7Kb8TI8">
                  Daftar PPDB Disini
                </a>
              </div>
            </nav>
            <div
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 cursor-pointer block lg:hidden"
              id="ppdb-hide"
            >
              <a href="https://docs.google.com/forms/d/1v4jGEnYmL9QreaFEl6NktSdk3sxb2h91-WQF7Kb8TI8">
                Daftar PPDB Disini
              </a>
            </div>

            <button
              className="lg:hidden text-slate-300 px-8 py-2"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-primary text-slate-100 transition-transform duration-300 ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            className="text-slate-300 text-2xl mb-4"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center mb-4"
          >
            <input
              type="text"
              className="bg-transparent w-full outline-none px-2 text-slate-100"
              placeholder="Cari..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button type="submit" className="text-slate-300">
              Search
            </button>
          </form>
          <HashLink
            smooth
            to="/#beranda"
            className="block py-2 text-lg"
            onClick={toggleMobileMenu}
          >
            Beranda
          </HashLink>
          <div className="py-2 text-lg">
            <div
              className="flex justify-between items-center"
              onClick={toggleTentangDropdown}
            >
              <span>Tentang Kami</span>
              <FontAwesomeIcon
                icon={isTentangDropdownOpen ? faChevronUp : faChevronDown}
              />
            </div>
            {isTentangDropdownOpen && (
              <div className="ml-4 mt-2">
                <HashLink
                  smooth
                  to="/tentang#tentangSekolah"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Tentang Sekolah
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang#kurikulum"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Kurikulum
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang#visi"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Visi dan Misi
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang#strukturOrganisasi"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Struktur Organisasi
                </HashLink>
                <HashLink
                  smooth
                  to="/tentang#prakata"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Prakata Kepala Sekolah
                </HashLink>
              </div>
            )}
          </div>
          <HashLink
            smooth
            to="/fasilitas#fasilitas"
            className="block py-2 text-lg"
            onClick={toggleMobileMenu}
          >
            Fasilitas
          </HashLink>
          <div className="py-2 text-lg">
            <div
              className="flex justify-between items-center"
              onClick={togglePublikasiDropdown}
            >
              <span>Publikasi</span>
              <FontAwesomeIcon
                icon={isPublikasiDropdownOpen ? faChevronUp : faChevronDown}
              />
            </div>
            {isPublikasiDropdownOpen && (
              <div className="ml-4 mt-2">
                <HashLink
                  smooth
                  to="/berita#berita"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Berita
                </HashLink>
                <HashLink
                  smooth
                  to="/kegiatan#kegiatan"
                  className="block py-2 text-base"
                  onClick={toggleMobileMenu}
                >
                  Kegiatan
                </HashLink>
              </div>
            )}
          </div>
          <HashLink
            smooth
            to="/hubungikami#hubungiKami"
            className="block py-2 text-lg"
            onClick={toggleMobileMenu}
          >
            Hubungi Kami
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
