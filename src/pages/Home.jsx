import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";
import CallToAction from "../component/CallToAction";
import News from "../component/News";
import Comment from "../component/Comment";
import LiveChat from "../component/LiveChat";

const Home = () => {
  return (
    <div className="font-sans overflow-x-hidden max-w-full">
      <Navbar />
      <Hero />
      <News />
      <Comment />
      <CallToAction />
      <Footer />
      <BackToTop />
      <LiveChat />
    </div>
  );
};

export default Home;
