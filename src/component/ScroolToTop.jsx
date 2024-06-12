import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function ScroolToTop() {
    
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
}

export default ScroolToTop
