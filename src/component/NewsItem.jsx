// components/NewsItem.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const NewsItem = ({id, date, category, imgSrc, title}) => {

    const navigate = useNavigate();

    const formatDate = (dateStr) => {
        if (!dateStr) return { day: '', month: '', year: '' };
        const [day, month, year] = dateStr.split(' ');
        return { day, month, year };
    };
    const { day, month, year } = formatDate(date);

    const handleClick = () => {
        navigate(`/${category === 'Berita' ? 'berita' : 'kegiatan'}-page/${id}`);
    };

    return (
        <div className="flex gap-7 border-b pt-8 pb-12 border-primary">
            <div className="w-52 flex flex-col py-2">
                <h1 className="text-5xl">{day}</h1>
                <div className="flex flex-col gap-1 pb-4 border-b border-primary">
                    <h1 className="text-xl">{month}</h1>
                    <h1 className="text-xl">{year}</h1>
                </div>
                <h1 className="mt-4 text-emas text-2xl">{category}</h1>
            </div>
            <div className="w-1/2 overflow-hidden bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={imgSrc} alt="" className="object-cover w-full h-full p-2 lazyload" />
            </div>
            <div className="flex flex-col justify-between pt-2 pb-6 px-3 w-full">
                <h3 className="text-xl">{title}</h3>
                <button
                    className="px-4 py-2 w-1/3 bg-primary text-white text-sm rounded-full font-semibold shadow-lg "
                    onClick={handleClick}
                >
                    Selengkapnya <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
                </button>
            </div>
        </div>
    );
};

export default NewsItem;
