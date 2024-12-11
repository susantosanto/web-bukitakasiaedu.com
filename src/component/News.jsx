import 'lazysizes';
import ListBerita from '../data/ListBerita.jsx';
import ListKegiatan from '../data/ListKegiatan.jsx'
import NewsItem from './NewsItem.jsx';  // Corrected path

const News = () => {
    const beritaList = ListBerita()
    const kegiatanList = ListKegiatan()

    const headerBerita = beritaList[beritaList.length - 1];
    const lastBerita = beritaList[beritaList.length - 2];
    const headerKegiatan = kegiatanList[kegiatanList.length - 1];
    const lastKegiatan = kegiatanList[kegiatanList.length - 2];

    return (
        <div className="bg-slate-100 min-h-screen -mt-52 p-10">
            <div className="w-12/12 lg:w-8/12 mx-auto flex flex-col items-center overflow-hidden">
                <div className="text-center mb-10">
                    <h1 className="text-primary text-4xl">BERITA & ACARA TERKINI</h1>
                </div>
                <div className="flex flex-col">
                    <NewsItem {...headerBerita} />
                    <NewsItem {...headerKegiatan} />
                    <NewsItem {...lastBerita} />
                    <NewsItem {...lastKegiatan} />
                </div>
            </div>
        </div>
    );
};

export default News;
