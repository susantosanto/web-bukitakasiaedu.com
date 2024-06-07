import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";
import CallToAction from "../component/CallToAction";
import News from "../component/News";
import Comment from "../component/Comment";


const Home = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <Hero />
            <News />
            <Comment />
            <CallToAction />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Home;