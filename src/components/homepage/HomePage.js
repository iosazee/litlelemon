import './HomePage.css'
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials"
import About from "./About";


function HomePage () {
    return (
        <section>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </section>
    )
}

export default HomePage;