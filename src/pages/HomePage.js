
// component
import Nav from '../components/Nav'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
// link


const HomePage = () => {
    return(
        <div> 
        <Nav />
        <IntroSection />
        <AboutSection />
        <SkillSection />
        <ContactSection />
        <Footer />
        </div>
    )
}

export default HomePage;