import backgroundImage from '../assets/hero/call.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'lazysizes';

const CallToAction = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+6282126016965', '_blank');
    };

    const handleEmailClick = () => {
        window.open('mailto:bukitakasiaoffice@gmail.com', '_blank');
    };

    return (
        <div
            className="relative -mt-12 text-white py-10 px-6 text-center shadow-md bg-cover bg-bottom lg:h-96 lazyload"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-8">
                <div className="border-b-2 w-11/12 mx-auto border-white py-2">
                    <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold mb-6 text-orange">Hubungi Kami</h2>
                </div>
                <p className="lg:text-lg mb-14 lg:w-9/12 mx-auto mt-4">
                    Temukan bagaimana kami dapat membantu anak Anda mencapai impian mereka dan meraih kesuksesan akademis di Sekolah Dasar Alam Bukit Akasia, Jatinangor Sumedang.
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0 lg:py-3">
                    <button onClick={handleWhatsAppClick} className="bg-orange text-primary lg:font-bold font-semibold py-2 lg:text-xl px-6 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex items-center">
                        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                        Hubungi Melalui WhatsApp
                    </button>
                    <button onClick={handleEmailClick} className="bg-orange text-primary lg:font-bold font-semibold py-2 lg:text-xl px-6 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Hubungi Melalui Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
