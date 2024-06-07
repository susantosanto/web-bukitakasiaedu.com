import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const toggleShowButton = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleShowButton);
        return () => {
            window.removeEventListener("scroll", toggleShowButton);
        };
    }, []);


    return (
        <div className="fixed bottom-4 right-4 z-50">
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="bg-orange text-primari p-3 rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <FontAwesomeIcon icon={faAngleUp} size="lg" />
                </button>
            )}
        </div>
    );
};

export default BackToTop;