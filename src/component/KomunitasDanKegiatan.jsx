import img1 from "../assets/komunitas/img1.jpg";
import img2 from "../assets/komunitas/img2.jpg";
const KomunitasDanKegiatan = () => {
    return (
        <section className="bg-white p-10 min-h-screen">
            <div className="w-11/12 mx-auto">
                <div className="text-center">
                    <h1 className="font-bold text-slate-700 text-4xl">Komunitas dan Kegiatan</h1>
                </div>
                <div className="relative w-full mt-5 mb-10">
                    <svg width="100%" height="4">
                        <line x1="0" y1="1" x2="100%" y2="2" className="stroke-slate-300" strokeWidth="4" />
                        <line x1="33%" y1="1" x2="67%" y2="2" stroke="#00594C" strokeWidth="4" />
                    </svg>
                </div>
                <div className="flex justify-between space-x-5">
                    <div className="basis-1/2 border rounded-lg shadow-lg">
                        <div className="mb-6 p-3 flex flex-col space-y-4">
                            <img src={img1} className="h-72 object-cover" alt="" />
                            <h3 className="text-2xl font-semibold text-slate-700">Kolaborasi Komunitas Pendidikan</h3>
                            <p className="mt-2 text-slate-600">
                                Program ini melibatkan berbagai pihak dari masyarakat untuk berpartisipasi aktif dalam kegiatan pendidikan, sehingga dapat menciptakan lingkungan belajar yang lebih inklusif dan kolaboratif.
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/2 border rounded-lg shadow-lg">
                        <div className="mb-6 p-3 flex flex-col space-y-4">
                        <img src={img2} className="h-72" alt=""/>
                            <h3 className="text-2xl font-semibold text-slate-700">Parenting Class</h3>
                            <p className="mt-2 text-slate-600">
                                Kelas parenting ini dirancang untuk memberikan dukungan dan sumber daya kepada orang tua, sehingga mereka dapat berperan aktif dalam pendidikan dan perkembangan anak-anak mereka di rumah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KomunitasDanKegiatan;
