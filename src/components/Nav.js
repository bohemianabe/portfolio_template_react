import styled from 'styled-components'
import logo from '../img/helloWorld3.png'
// framer motion
import {motion} from 'framer-motion'
import {navAppearance, navLine} from '../animation'
// useScroll
import { useScroll } from './useScroll'
import { Link } from 'react-scroll'

const Nav =() => {
    const [element, controls] = useScroll();
    return(
        <Main variants={navAppearance} initial="hidden" animate="show">
        <div className="pad"> 
            <img src={logo} alt="hello-world logo"/>

            <ul>
            <li><Link activeClass="active" to="IntroSection" spy={true} smooth={true} offset={-70} duration={700} > Home </Link></li>
            <li><Link activeClass="active" to="SkillSection" spy={true} smooth={true} offset={-70} duration={700} > Education </Link></li>
            <li><Link activeClass="active" to="ContactSection" spy={true} smooth={true} offset={-70} duration={700} > Contact </Link></li>
            </ul>
        </div>
        <motion.div variants={navLine} initial='hidden' animate={controls} ref={element} className="line"></motion.div>
        </Main>
    )
}

const Main = styled(motion.div)`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    .line{
        width: 100%;
        height: 5px;
        box-shadow: 4px 4px 4px gray;
        background-color: white;
        }
    .pad{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 3rem;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
    }
    img{
        width: 12rem;
        height: 6rem;
    }

    ul li {
        padding: 0rem .5rem;
        font-size: 1.5rem;
        color: #2d1f1f;
        font-weight: bolder;
        :hover{
            cursor: pointer;
            color: #19611f;
        }
    
    }
    @media (max-width: 1000px){
        img{
            width: 6rem;
            height: 3rem;
        }
    @media (max-width: 800px){
        ul li {
            font-size: 1rem;
        }
        .pad{
            padding: 0rem;
            justify-content: space-around;
        }
    }
    }
`;


export default Nav