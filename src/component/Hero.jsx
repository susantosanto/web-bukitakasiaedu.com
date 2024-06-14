import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Tentang from './Tentang';
import 'lazysizes';

// Gunakan gambar yang sudah dioptimalkan
import banner1 from '../assets/hero/banner1.webp';
import banner2 from '../assets/hero/banner2.webp';
import banner3 from '../assets/hero/banner3.webp';
import banner4 from '../assets/hero/banner4.webp';
import banner5 from '../assets/hero/banner5.webp';
import banner6 from '../assets/hero/banner6.webp';

const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

const Hero = () => {
    const tentangRef = useRef(null);

    const scrollToTentang = () => {
        if (tentangRef.current) {
            const yOffset = -190; // Adjust this value based on your navbar height
            const yPosition = tentangRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <div id="beranda" className="relative -mt-24 min-h-screen">
                <div className="relative w-full h-screen">
                    <Slider {...settings} className="w-full h-full">
                        {banners.map((banner, index) => (
                            <div key={index} className="w-full h-full">
                                <img
                                    className="w-full h-full object-cover flex-shrink-0 lazyload"
                                    data-src={banner}
                                    alt={`Banner ${index + 1}`}
                                    style={{ height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className='absolute inset-0 bg-black opacity-40'></div>
                </div>
                <div className='mx-auto absolute bottom-5 left-0 w-full text-white p-8'>
                    <div className="w-11/12 mx-auto border-t py-2 border-slate-100 flex flex-col justify-between items-center space-y-5 md:flex-row md:space-y-0 md:space-x-10">
                        <h1 className='text-center md:text-left text-2xl md:text-4xl lg:text-4xl font-bold'>
                            Temukan Bakatmu
                        </h1>
                        <p className='text-center md:text-left text-sm md:text-base lg:text-md leading-relaxed'>
                            Di SD Alam Bukit Akasia, <br />
                            temukan bakat unikmu <br />
                            dan kembangkan bersama kami.
                        </p>
                        <a href="#" onClick={scrollToTentang} className="flex items-center text-lg md:text-xl font-semibold text-white py-2 px-10 transform transition duration-500 hover:translate-x-5  hover:text-slate-200">
                            Selengkapnya <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
                        </a>
                    </div>
                </div>
            </div>
            <Tentang ref={tentangRef} />
        </>
    );
};

export default Hero;
