import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import DataTestimonials from '../data/DataTestimonials';

const Comment = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedTestimonial, setExpandedTestimonial] = useState(null);
    const slideInterval = 5000; // Interval time in milliseconds (5 seconds)
    const intervalRef = useRef(null);


    const toggleShow = (id) => {
        if (expandedTestimonial === id) {
            setExpandedTestimonial(null);
            startSlideShow();
        } else {
            setExpandedTestimonial(id);
            stopSlideShow();
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(DataTestimonials.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(DataTestimonials.length / 3)) % Math.ceil(DataTestimonials.length / 3));
    };

    const startSlideShow = () => {
        intervalRef.current = setInterval(nextSlide, slideInterval);
    };

    const stopSlideShow = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow();
    }, []);

    return (
        <div className="min-h-screen mt-5 p-10 bg-white">
            <div className="w-10/12 mx-auto flex flex-col items-center">
                <div className="text-center w-10/12 mb-20 relative">
                    <FontAwesomeIcon icon={faQuoteRight} className="absolute left-0 text-6xl text-gray-200 transform -translate-x-full -translate-y-1/2 top-1/2" />
                    <h1 className="text-primary text-4xl inline-block">
                        APA KATA MEREKA
                    </h1>
                </div>

                <div className="relative w-full h-full">
                    <div className="flex overflow-hidden">
                        <div
                            className="flex w-full transition-transform duration-300"
                            style={{ transform: `${expandedTestimonial === DataTestimonials.id ? '' : `translateX(-${currentSlide * 100}%)`}` }}
                        >
                            {DataTestimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`flex-none w-full md:w-1/3 px-2 transform transition-all duration-500 cursor-pointer ${expandedTestimonial === testimonial.id ? 'w-full' : ''}`}
                                >
                                    <div className={`rounded-lg shadow-lg p-6 mb-6 transform transition-all duration-500 hover:shadow-lg hover:scale-105 ${expandedTestimonial === testimonial.id ? 'bg-gray-100 hover:scale-100' : ''}`}>
                                        <div className="flex items-center mb-4">
                                            <img
                                                className="w-16 h-16 object-cover rounded-full shadow-lg"
                                                src={testimonial.image}
                                                alt="User profile"
                                            />
                                            <div className="ml-4">
                                                <h2 className="text-lg text-primary font-semibold">{testimonial.name}</h2>
                                                <p className="text-sm text-gray-500">{testimonial.username}</p>

                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className="text-sm text-slate-500 mb-2">- <span className='text-primary'>{testimonial.desc}</span></p>
                                            <p className="text-slate-500 font-extralight text-md text-justify">
                                                &quot;{expandedTestimonial === testimonial.id ? testimonial.longText : testimonial.shortText}&quot;
                                                <span className='text-primary'>
                                                    <button className='italic' onClick={() => toggleShow(testimonial.id)}>
                                                        {expandedTestimonial === testimonial.id ? ' Lebih Sedikit' : ' Lebih Lengkap'}
                                                    </button>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {!expandedTestimonial && (
                        <>
                            <button
                                className="absolute top-1/2 -translate-y-1/2 -left-8 p-2 text-primary transform transition duration-500 hover:scale-110 cursor-pointer"
                                onClick={prevSlide}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="mr-3 text-2xl" />
                            </button>
                            <button
                                className="absolute top-1/2 -translate-y-1/2 -right-8 p-2 transform transition duration-500 hover:scale-110 cursor-pointer"
                                onClick={nextSlide}
                            >
                                <FontAwesomeIcon icon={faAngleRight} className="ml-3 text-2xl" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comment;
