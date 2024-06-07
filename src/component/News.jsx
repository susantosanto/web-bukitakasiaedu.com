import 'lazysizes';
import ListBerita from '../data/ListBerita.jsx';
import { ListKegiatan } from '../data/ListKegiatan.jsx';
import NewsItem from '../component/NewsItem';

const News = () => {

    const headerBerita = ListBerita[ListBerita.length - 1];
    const lastBerita = ListBerita[ListBerita.length - 2];
    const headerKegiatan = ListKegiatan[ListKegiatan.length - 1];
    const lastKegiatan = ListKegiatan[ListKegiatan.length - 2];

    return (
        <div className="bg-slate-100 min-h-screen -mt-52 p-10">
            <div className="w-8/12 mx-auto flex flex-col items-center overflow-hidden">
                <div className="text-center mb-10">
                    <h1 className="text-primary text-4xl">BERITA & ACARA TERKINI</h1>
                </div>
                <div className="flex flex-col mx-auto text-slate-600">
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
