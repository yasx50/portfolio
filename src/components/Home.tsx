import Galaxy from "../Spline/Galaxy"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Project from "./projects/Project"
import Skills from "./skill/Skills"

const Home = () => {
    return (
        <main>
            <Hero />
            <Galaxy />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home