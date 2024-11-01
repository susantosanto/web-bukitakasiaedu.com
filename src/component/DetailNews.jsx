import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLeftLong,
  faMapMarkerAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

export default function DetailNews(props) {
  const {
    newsCategory,
    newsDate,
    newsImg,
    newsLocation,
    newsLongDesc,
    newsTitle,
  } = props;

  return (
    <div className="w-11/12 md:w-9/12 mx-auto mt-10 flex flex-col py-8 mb-16">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
        <img
          src={newsImg}
          alt={newsTitle}
          className="w-full h-full md:h-96 object-cover"
        />
        <div className="p-6 md:p-20">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {newsTitle}
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-500 mb-6">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-orange-500"
              />
              <span>{newsDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTag} className="text-orange-500" />
              <span>{newsCategory}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-orange-500"
              />
              <span>{newsLocation}</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-justify">
            {newsLongDesc}
          </p>
          <p className="text-slate-500 mt-4 text-right">
            <HashLink smooth to={`/berita-page#berita`} className="text-orange">
              <FontAwesomeIcon icon={faLeftLong} className="text-orange-500" />{" "}
              Kembali
            </HashLink>
          </p>
          <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {/* <img src="/path/to/author/image.jpg" alt="Author" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="text-sm text-gray-700 font-semibold">Written by John Doe</p>
                                    <p className="text-sm text-gray-500">Journalist at SD Alam Bukit Akasia</p>
                                </div> */}
            </div>
            <div className="text-sm text-gray-500">Published on {newsDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
