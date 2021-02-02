import styled from 'styled-components'
import logo from '../img/helloWorld3.png'
// framer motion
import {motion} from 'framer-motion'
// font awesome
import {faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer =() => {
    return(
        <Main>
            <div className="copy"> 
            <img src={logo} alt="hello-world logo"/>
            <h4>&copy; Abel Garrido</h4>
            </div>
            <ul>
                <li> <FontAwesomeIcon icon={faTwitter} /> </li>
                <li> <FontAwesomeIcon icon={faInstagram} /> </li>
                <li> <FontAwesomeIcon icon={faLinkedin} /> </li>
            </ul>
            
        </Main>
    )
}

const Main = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0rem 5rem;
    align-items: center;
    /* height: 10vh; */
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
    }
    img{
        width: 6rem;
        height: 3rem;
    }

    ul li {
        padding: 0rem .5rem;
        font-size: 1.5rem;
        color: #2d1f1f;
        font-weight: bolder;
        :hover{
            cursor: pointer;
        }
    
    }
    .line{
        width: 100%;
        height: 5px;
        box-shadow: 4px 4px 4px gray;
        background-color: white;
    }
    .copy{
        display: flex;
        align-items: center;
    }
    @media (max-width: 800px){
        padding: .5rem .5rem;
        .copy img{
            display: none;
        }
        ul li {
            font-size: 1rem;
        }
    }
`;


export default Footer