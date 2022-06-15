import Nav from "../components/Nav";
import Background from "../components/Background";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";
export default function Home() {
  return (
    <Background>
      <Nav />
      <NavMobile />
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </Background>
  );
}
