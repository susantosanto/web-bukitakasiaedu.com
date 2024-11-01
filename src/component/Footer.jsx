import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#003B32] text-slate-300 py-10">
      <div className="container w-11/12 md:w-9/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="lg:text-3xl text-xl font-bold mb-5">
              SD Alam Bukit Akasia
            </h5>
            <h5 className="text-lg font-bold mb-3">Contact Us</h5>
            <p className="font-light mb-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Kawasan Bukit Akasia Komplek Panorama Jatinangor, Cinanjung
              Tanjungari - Sumedang
            </p>
            <p className="font-light mb-2 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              bukitakasiaoffice@gmail.com
            </p>
            <p className="font-light flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              (+62) 821-2601-6965
            </p>
          </div>
          <div className="hidden lg:block">
            <h5 className="text-lg font-bold mb-5">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Tetang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Akademik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Komunitas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Fasilitas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h5 className="text-lg font-bold mb-5">Newsletter</h5>
            <p className="font-light mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-slate-100 text-slate-600 focus:outline-none"
              />
              <button className="bg-primary text-slate-100 px-4 py-2 rounded transform duration-500 hover:scale-110 cursor-pointer transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="mailto:bukitakasiaoffice@gmail.com"
              className="text-white hover:text-gray-300 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://wa.me/6282126016965"
              className="text-white hover:text-gray-300 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
            <a
              href="https://web.facebook.com/p/Sekolah-Alam-Bukit-Akasia-100078924381045/"
              className="text-white hover:text-gray-300 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/akasia_edu/?hl=id"
              className="text-white hover:text-gray-300 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC-LzMpLzWE7oluhkmCoD-Vg"
              className="text-white hover:text-gray-200 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Yayasan Bukit Akasia. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
