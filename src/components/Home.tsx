import Galaxy from "../Spline/Galaxy"
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
        </main>
    )
}

export default Home