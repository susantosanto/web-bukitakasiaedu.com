import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import tentang from "../assets/tentang/img1.jpg";
import { forwardRef } from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Tentang = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white min-h-screen">
            <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto p-6 md:p-10">
                <div className="mb-5 flex flex-col space-y-3">
                    <h1 className="text-primary text-2xl md:text-3xl lg:text-3xl text-center">Selamat datang di SD Alam Bukit Akasia</h1>
                </div>
                <div className="text-slate-400 text-center font-light text-sm md:text-md lg:text-lg mt-6 md:mt-12">
                    <p>
                        SD Alam Bukit Akasia, dari Yayasan Bukit Akasia, berfokus pada pengembangan potensi unik setiap anak. Dengan lokasi di kawasan alam yang luas dan aman, siswa kami dapat belajar dan bermain di lingkungan yang mendidik dan inspiratif. Di sini, setiap anak dapat menemukan bakat mereka dalam suasana yang mendukung.
                    </p>
                </div>
                <div className="mt-16 md:mt-24 w-full md:w-fit text-sm lg:text-md text-center text-slate-100 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <HashLink smooth to='/tentang-page#tentangSekolah' className="py-3 px-6 md:py-4 md:px-8 bg-primary rounded-full lg:font-bold shadow-lg flex items-center justify-center">
                        Pelajari Selengkapnya Tentang SD Alam Bukit Akasia
                        <FontAwesomeIcon icon={faAngleRight} className="ml-2 md:ml-3 hidden lg:flex" />
                    </HashLink>
                </div>
            </div>
        </div>
    );
});

Tentang.displayName = "Tentang";
export default Tentang;
