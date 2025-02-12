'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}
