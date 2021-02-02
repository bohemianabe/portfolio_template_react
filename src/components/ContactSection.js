import styled from 'styled-components'
import capitolPhoto from '../img/capitolBuilding.jpg'
// formspree hook
import { useForm, ValidationError } from '@formspree/react'
// message sent component
import MessageSent from './MessageSent'

const ContactSection = () => {
    const [state, handleSubmit] = useForm("contactMe")
    if(state.succeeded){
        return <MessageSent />
    }
    return(
        <MainDiv id="ContactSection">
            <h2>Contact Me!</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input type="text" name='name' id='name' placeholder='name' />
                </div>

                <div className="field">
                    <input type="text" name="email" id="email" placeholder="email" />
                    <ValidationError field="email" prefix="Email" errors={state.error} />
                </div>

                <div className="field2">
                    <textarea name="message" id="message" cols="30" rows="4" placeholder='message' ></textarea>
                </div>

                <div className="action">
                    <input type="submit" value="Send Message" className="special" />
                    <ValidationError errors={state.error} />
                </div>
            </form>

            <img src={capitolPhoto} alt="capitol building"/>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    padding: 3rem;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    background-color: #f4f4f4;
    border-top: .1rem solid #716e6e;
    border-bottom: .1rem solid #716e6e;
    h2{
        width: 100%;
        text-align: center;
        margin-bottom: 1rem;
    }
    form{
        width: 45%;
        height: 70%;
        background-color: gray;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: .5rem 0rem;
        .action{
            width: 80%;
            align-self: center;
            input{
                width: 30%;
                background-color: #8febea;
                padding: .3rem;
                :hover{
                    color: #8febea;
                    background-color: black;
                    cursor: pointer;
                }
            }
        }
        .field{
            width: 80%;
            height:10%;
            align-self: center;
            display: flex;
            flex-direction: column;
            color: black;
            input{
                height: 100%;
                font-size: 1.5rem;
                padding: .1rem .5rem;
                font-family: 'Times New Roman', sans-serif;
            }
        }
        .field2{
            width: 80%;
            height:50%;
            align-self: center;
            display: flex;
            flex-direction: column;
            color: black; 
            textarea{
                height: 100%;
            }
        }
    }
    img{
        height: 70%;
        width: 50%;
        object-fit: none;
        object-position: center;
    }
    @media (max-width: 800px){
        padding: .5rem;
        flex-direction: column;
        h2{
            font-size: 1rem;
        }
        form{
            width: 100%;
            height: 85%;
            .field input{
                font-size: 1rem;
            }
            .action{
                display: flex;
                justify-content: center;
                input{
                    width: 50%;
                }
            }
        }
        img{
            width: 100%;
            height: 40%;
            display: none;
        }
    }
`;


export default ContactSection;