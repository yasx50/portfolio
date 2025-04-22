import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./components/Home"
import { useEffect } from "react"
import Lenis from "lenis"

const App = () => {

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )


}

export default App