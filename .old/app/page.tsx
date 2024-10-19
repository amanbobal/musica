"use client";
import styles from "./page.module.scss";
import ZoomParallax from "./components/zoomparallax/index.jsx";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header/Header";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Header />
      <div className={styles.main}>
        <ZoomParallax />
      </div>
    </main>
  );
}
