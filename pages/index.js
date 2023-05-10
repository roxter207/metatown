import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>
      <WhatsNew /> 
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <World />

    <Footer />
  </div>
);

export default Home;
