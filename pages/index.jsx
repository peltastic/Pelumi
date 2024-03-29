import Nav from "../components/Nav";
import Background from "../components/Background";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";
import Head from "next/head";
export default function Home() {
  return (
    <Background>
      <Head>
        <title>Pelumi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Nav />
      <NavMobile />
      <Header />
      <About />
      <Projects />
      <Footer />
    </Background>
  );
}
