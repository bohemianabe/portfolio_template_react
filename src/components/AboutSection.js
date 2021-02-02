
import styled from 'styled-components'
import officeGuy from '../img/officeGuy.jpg'


const AboutSection = () => {
    return(
        <MainDiv id="AboutSection">
            <h2>About</h2>

            <img src={officeGuy} alt="office guy"/>
            <div className="blurb">
                <h3>Who's this handsome person?</h3>
                <p>Here you can introduce yourself, and say whatever you'd like. Don't mind the rabble written after here. It's just filler text. <br/> <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, veniam? Praesentium a fugiat tenetur dolorum odit eveniet neque debitis maiores?</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia explicabo officia debitis minus dolorum libero, expedita quod impedit labore voluptate illo molestias, magnam voluptates necessitatibus. Minima distinctio ducimus veniam!</p>
            </div>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f4f4f4;
    border-top: .1rem solid #716e6e;
    border-bottom: .1rem solid #716e6e;
    h2{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
    }
    img{
        width: 45%;
        box-shadow: 3px 3px 3px 3px gray;
        object-fit: cover;
    }
    .blurb{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    p{
        font-size: 1.5rem;
    }
    h3{
        align-self: center;
        color: black;
    }
    }
    @media (max-width: 800px){
        padding: 1rem;
        flex-direction: column;
        align-items: center;
        img{
            display: none;
        }
        .blurb{
            width: 95%;
            p{
                font-size: 1.1rem;
            }
            h3{
                text-decoration: underline;
                margin-bottom: 1rem;
                
            }
        }
    }
`;

export default AboutSection;