import frontPhoto from '../img/officeComputer.jpg'
import styled from 'styled-components'
// font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
// framer motion
import {motion} from 'framer-motion'
// animation
import {letterFade, imgReveal, buttonDown} from '../animation'
import { Link, animateScroll as scroll } from 'react-scroll'

const IntroSection = () => {
    return (
        <Main id="IntroSection">
            <IntroSquare  variants={letterFade} initial="hidden" animate="show">
                <h4>Hi</h4>
                <h3>I'm &lt;insert name here&gt;</h3>
                <h3>&lt;insert profession&gt;</h3>
                <p>a problem solver <motion.span >and passionate &lt;insert&gt;.</motion.span></p>
                <a href="#">Resume Link</a>
            </IntroSquare>

            <motion.img variants={imgReveal} initial="hidden" animate='show' src={frontPhoto} alt="front-photo"/>

         
            <CaretDiv> 
            <Link activeClass="active" to="AboutSection" spy={true} smooth={true} offset={-70} duration={700} > 
            <FontAwesomeIcon icon={faChevronCircleDown} /> 
            </Link>
            </CaretDiv>
        
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    padding: 5rem;
    align-items: center;
    justify-content: space-around;
    letter-spacing: .2rem;
    line-height: 1.5;
    flex-wrap: wrap;
    img{
        height: 30rem;
        max-width: 50%;
        box-shadow: 3px 3px 3px gray;
    }
    @media (max-width: 800px){
        flex-direction: column;
        padding: .5rem;
        img{
            height: 45%;
            width: auto;
        }
    }
`;

const IntroSquare = styled(motion.div)`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
        font-size: 1.5rem;
        color: #19611f;
        
    }
    h3{
        font-size: 2.5rem;
        color: #0a1d5d;
    }
    p{
        font-weight: 200;
        margin: 0.4em 0;
        span{
            color: #c0360d;
            font-weight: bold;
            font-size: 1.5rem;
        }
    }
    @media (max-width: 800px){
        width: auto;
        height: 45%;
        h4{
            font-size: 1rem
        }
        h3{
            font-size: 1.5rem;
        }
        p span{
            font-size: 1.25rem;
        }
    }
`;

const CaretDiv = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    svg{
        margin: 1rem;
        :hover{
            cursor: pointer;
            
        }
    }
    @media (max-width: 800px){
        height: 5%;
        font-size: 1.2rem;
    }

`;

export default IntroSection;