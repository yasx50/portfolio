import LazySpline from "../Spline/LaxySpline"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Project from "./projects/Project"
import Skills from "./skill/Skills"

const Home = () => {
    return (
        <main>
            <Hero />
            <LazySpline />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home