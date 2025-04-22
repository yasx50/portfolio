import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./components/Home"
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on("scroll", (e) => {
      console.log(e);
    })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    const handleLoad = () => {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop lenisInstance={lenisRef.current} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App