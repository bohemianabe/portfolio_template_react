import styled from 'styled-components'

const SkillSection = () => {
    return(
        <MainDiv id="SkillSection">
            <div className="skill-list">
                <h2>Skills & Education</h2>
                <ul>
                    <li>Windows</li>
                    <li>Excel</li>
                    <li>Data Entry</li>
                    <li>Sales</li>
                    <li>Linux</li>
                </ul>
            </div>

            <div className="line"></div>

            <div className='education'>
                <h3>University of Harvard at Compton Annex</h3>
                <h4>B.S. in Communication</h4>
            </div>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    justify-content: space-around;
    .line{
        width: 80%;
        height: .5rem;
        background: #c0360d;
        border-radius: .3rem;
    }
    .education{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50%;
        align-items: center;
        justify-content: space-evenly;
        font-size: 1.5rem;
        h4{
            font-style: italic;
        }
        h3{
            color: black;
        }
    }
    .skill-list{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 50%;
        justify-content: space-around;
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            list-style-type: disclosure-closed;
            width: 100%;
            padding: 0rem 2rem;
            li{
                font-size: 1.5rem;
                color: #040d17;
            }
        }
    }
    @media (max-width: 800px){
        padding: 1rem;
        h2{
            font-size: 1.5rem;
        }
        .skill-list{
        ul{
            padding: 0 .3rem;
            flex-wrap: wrap;
            list-style-type: circle;
            li{
                font-size: 1rem;
            }
        }
        }
        .education{
            font-size: 1rem;
        }
    }
`;

export default SkillSection