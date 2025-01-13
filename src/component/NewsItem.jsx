import { Timestamp } from "firebase/firestore"; // Pastikan Timestamp diimpor jika belum ada
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NewsItem = ({ id, date, category, file, title }) => {
  const navigate = useNavigate();

  const formatDate = (dateStr) => {
    if (!dateStr) return { day: "", month: "", year: "" };

    if (dateStr instanceof Timestamp) {
      const date = dateStr.toDate();
      dateStr = date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    const [day, month, year] = dateStr.split(" ");
    return { day, month, year };
  };

  const { day, month, year } = formatDate(date);

  const handleClick = () => {
    navigate(
      `/${category.toLowerCase() === "berita" ? "berita" : "kegiatan"}/${id}`
    );
  };

  return (
    <div className="lg:border-b lg:pt-8 lg:pb-12 border-primary md:flex md:gap-7">
      {/* Desktop View */}
      <div className="hidden md:flex md:gap-7">
        <div className="w-52 flex flex-col py-2">
          <h1 className="text-4xl">{day}</h1>
          <div className="flex flex-col gap-1 pb-4 border-b border-primary">
            <h1 className="text-xl">{month}</h1>
            <h1 className="text-xl">{year}</h1>
          </div>
          <h1 className="mt-4 text-emas text-2xl">{category}</h1>
        </div>
        <div className="w-1/2 overflow-hidden bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl max-h-64">
          <img
            src={file}
            alt=""
            className="max-h-64 object-cover w-full h-full p-2 lazyload"
          />
        </div>
        <div className="flex flex-col justify-between pt-2 pb-6 px-3 w-full">
          <h3 className="text-xl">{title}</h3>
          <button
            className="px-4 py-2 w-1/3 bg-primary text-white text-sm rounded-full font-semibold shadow-lg transform transition duration-500 hover:translate-x-5"
            onClick={handleClick}
          >
            Selengkapnya{" "}
            <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
          </button>
        </div>
      </div>

      {/* Mobile and Tablet View */}
      <div className="md:hidden bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl mb-8">
        <img src={file} alt="" className="w-full h-48 object-cover lazyload" />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex">
              <p className="text-sm">
                {day} {month} {year}
              </p>
            </div>
            <h3 className="text-md text-emas">{category}</h3>
          </div>
          <h3 className="text-md mb-4">{title}</h3>
          <button
            className="px-4 py-2 bg-primary text-white text-sm rounded-full shadow-lg w-full transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            onClick={handleClick}
          >
            Selengkapnya{" "}
            <FontAwesomeIcon icon={faAngleRight} className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
