import NavbarSecondary from '../component/NavbarSecondary';
import Footer from '../component/Footer';
import bannerTentang from '../assets/tentang-page/hasilbelajar.webp';
import Header from '../component/Header';
import 'lazysizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const HubungiKamiPage = () => {
    return (
        <div id='hubungiKami' className="w-full">
            <NavbarSecondary />
            <Header topBanner={bannerTentang} title='Hubungi Kami' />

            {/* Section Hubungi Kami */}
            <div className="w-11/12 md:w-10/12 mx-auto mt-10 md:mt-20 py-8 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                        <h5 className="text-2xl md:text-3xl font-bold mb-5 text-primary">SD Alam Bukit Akasia</h5>
                        <h5 className="text-lg md:text-xl font-bold mb-3 text-primary">Contact Us</h5>
                        <div className="space-y-4">
                            <p className="font-light flex items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 text-orange" />
                                Kawasan Bukit Akasia Komplek Panorama Jatinangor, Cinanjung Tanjungari - Sumedang
                            </p>
                            <p className="font-light flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-orange" />
                                Email: bukitakasiaoffice@gmail.com
                            </p>
                            <p className="font-light flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="mr-4 text-orange" />
                                Phone: (+621) 821-2601-6965
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col justify-center items-center">
                        <h5 className="text-2xl md:text-3xl font-bold mb-5 text-primary text-center">Follow Us</h5>
                        <div className="flex space-x-4 md:space-x-6">
                            <a href="mailto:bukitakasiaoffice@gmail.com" className="text-primary hover:text-secondary transition-colors duration-200">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                            <a href="https://wa.me/6282126016965" className="text-primary hover:text-secondary transition-colors duration-200">
                                <FontAwesomeIcon icon={faPhone} size="2x" />
                            </a>
                            <a href="https://web.facebook.com/p/Sekolah-Alam-Bukit-Akasia-100078924381045/" className="text-primary hover:text-secondary transition-colors duration-200">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="#" className="text-primary hover:text-secondary transition-colors duration-200">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/akasia_edu/?hl=id" className="text-primary hover:text-secondary transition-colors duration-200">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC-LzMpLzWE7oluhkmCoD-Vg" className="text-primary hover:text-secondary transition-colors duration-200">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="w-full mt-10">
                    <iframe
                        title="SD Alam Bukit Akasia Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.86748208341!2d107.7559627!3d-6.9242088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e56b674ca8b7%3A0xd35e56952d4e0eb6!2sCinanjung%2C%20Tanjungsari%2C%20Sumedang%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1622764056906!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            {/* End Section Hubungi Kami */}

            <Footer />
        </div>
    );
};

export default HubungiKamiPage;
