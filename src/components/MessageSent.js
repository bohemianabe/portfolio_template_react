import styled from 'styled-components'
import mailSent from '../img/mailSent.jpg' 
// framer motion
import {motion} from 'framer-motion'
// animation
import { lineMessage, imgMessage} from '../animation'

const MessageSent = () => {
    return(
        <MainDiv>
            <div className="thanks">
                <motion.h3 variants={lineMessage} initial="hidden" animate="show">Thank you! Your Message has been sent!</motion.h3>
            </div>

            <motion.img variants={imgMessage} initial="hidden" animate="show" src={mailSent} alt="mail sent"/>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    padding: 3rem;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    background-color: #f4f4f4;
    border-top: .1rem solid #716e6e;
    border-bottom: .1rem solid #716e6e;
    .thanks{
        height: 50%;
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #19611f;
        font-size: 2rem;
    }
    img{
        height: 50%;
        width: 45%;
    }
    @media (max-width: 800px){
        img{
            display: none;
        }
        .thanks{
            width: 100%;
        }
    }
`;

export default MessageSent;