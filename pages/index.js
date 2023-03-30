import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
   <>
   <Head>
    <link rel="shortcut icon" href="/Images/capyy.svg" />
   </Head>
    <Landing />
    <Projects/>
    <Contact/>
    <Footer/>
   </>
  )
}
