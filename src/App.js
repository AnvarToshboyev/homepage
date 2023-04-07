import Accordions from "./components/accordion";
import BlogSection from "./components/blogsection";
import Connectsection from "./components/connectsection";
import Customersection from "./components/customersection";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Loginsection from "./components/loginsetion";
import Oursection from "./components/oursection";
import Swiperbutton from "./components/swiperbutton";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Oursection />
      <Connectsection />
      <Customersection />
      <Swiperbutton />
      <Accordions />
      <BlogSection />
      <Loginsection />
      <Footer />
    </>
  );
}

export default App;
