import { useState, useEffect, useRef } from "react";
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
const bannersExtended = [...banners, banners[0]];

const Hero = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const bannerRef = useRef(null);
    const tentangRef = useRef(null);

    const scrollToTentang = () => {
        if (tentangRef.current) {
            const yOffset = -190; // Adjust this value based on your navbar height
            const yPosition = tentangRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const resizeHandler = () => {
            const bannersContainer = bannerRef.current;
            if (bannersContainer) {
                bannersContainer.style.height = `${window.innerHeight}px`;
            }
        };

        // Set initial height
        resizeHandler();

        // Attach resize event listener
        window.addEventListener('resize', resizeHandler);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextBannerIndex = (currentBanner + 1) % bannersExtended.length;
            slideToBanner(nextBannerIndex);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentBanner]);

    const slideToBanner = (index) => {
        const bannersContainer = bannerRef.current;
        bannersContainer.style.transition = 'transform 0.2s ease-in-out';
        bannersContainer.style.transform = `translateX(-${index * 100}%)`;

        if (index === banners.length) {
            setTimeout(() => {
                bannersContainer.style.transition = 'none';
                bannersContainer.style.transform = 'translateX(0)';
                setCurrentBanner(0);
            }, 300); // Match the transition duration
        } else {
            setCurrentBanner(index);
        }
    };

    return (
        <>
            <div id="beranda" className='relative -top-24 overflow-hidden min-h-screen'>
                <div className="relative w-full h-screen overflow-hidden">
                    <div ref={bannerRef} className="flex w-full h-full">
                        {bannersExtended.map((banner, index) => (
                            <img
                                key={index}
                                className="w-full h-full object-cover flex-shrink-0 lazyload"
                                src={banner}
                                alt={`Banner ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className='absolute inset-0 bg-black opacity-40'></div>
                </div>
                <div className='mx-auto absolute bottom-5 left-0 w-full text-white p-8'>
                    <div className="w-10/12 container border-t border-slate-100 mx-auto flex flex-col justify-between space-x-10 md:flex-row items-center">
                        <h1 className=' pt-5 text-4xl md:text-5xl lg:text-4xl font-bold mb-4 md:mb-0 md:mr-8'>
                            Temukan Bakatmu
                        </h1>
                        <p className='text-sm pt-5 md:text-base lg:text-sm mb-4 md:mb-0 md:mr-8 ml-6 leading-relaxed'>
                            Di SD Alam Bukit Akasia, <br />
                            temukan bakat unikmu <br />
                            dan kembangkan bersama kami.
                        </p>
                        <a href="#" onClick={scrollToTentang} className="flex items-center text-lg md:text-xl lg:text-xl font-semibold text-white py-2 px-10 hover:text-slate-200">
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
