import { timeStamp } from "console"
import { Link } from "react-router-dom"
import styled from "styled-components"
import athlete from './../img/athlete2.png'
import racer from '../img/the-racer2.jpg'
import goodtimes from '../img/good-times2.jpg'

const OurWork = () => {
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/'>
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/'>
                    <img src={racer} alt="racer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/'>
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: white;
    h2{
        padding: 1rem 0 rem;
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        backround: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork
