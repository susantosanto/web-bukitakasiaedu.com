import antarjemput from "../assets/fasilitas/antarjemput.jpg";
import aula from "../assets/fasilitas/aula.jpg";
import bazar from "../assets/fasilitas/bazar.jpg";
import kantin from "../assets/fasilitas/kantin.jpg";
import balendongan from "../assets/fasilitas/belandongan.jpg";
import camping from "../assets/fasilitas/camping.jpg";
import fo from "../assets/fasilitas/fo.jpg";
import kelas from "../assets/fasilitas/kelas.jpg";
import playground from "../assets/fasilitas/playground.jpg";
import rumahkayu from "../assets/fasilitas/rumahkayu.jpg";
import 'lazysizes';
const Fasilitas = () => {

    const fasilitas = [
        {
            src: antarjemput,
            title: 'Antar Jemput',
        },
        {
            src: aula,
            title: 'Aula',
        },
        {
            src: bazar,
            title: 'Bazar',
        },
        {
            src: kantin,
            title: 'Kantin',
        },
        {
            src: balendongan,
            title: 'Balendongan',
        },
        {
            src: camping,
            title: 'Camping',
        },
        {
            src: fo,
            title: 'FO',
        },
        {
            src: kelas,
            title: 'Kelas',
        },
        {
            src: playground,
            title: 'Playground',
        },
        {
            src: rumahkayu,
            title: 'Rumah Kayu',
        }
    ];
    return (
        <div className="bg-slate-100 min-h-screen p-10">
            <div className="w-11/12 mx-auto flex flex-col items-center bg-slate-100 overflow-hidden">
                <div className="text-center">
                    <h1 className="font-bold text-slate-800 text-4xl">Fasilitas</h1>
                </div>
                <div className="relative w-full mt-5 mb-10">
                    <svg width="100%" height="4">
                        <line x1="0" y1="1" x2="100%" y2="2" className="stroke-slate-300" strokeWidth="4" />
                        <line x1="33%" y1="1" x2="67%" y2="2" stroke="#00594C" strokeWidth="4" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fasilitas.map((facility, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
                            <img className="w-full h-64 object-cover lazyload" src={facility.src} alt={facility.title} />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <h2 className="text-white text-xl font-semibold">{facility.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Fasilitas;
