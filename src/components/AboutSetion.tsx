import home1 from "./../img/home1.png"

import {About, Description, Image, Hide} from '../styles'
const AboutSection = () => {
    return(
        <About>
            <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true</h2>
                </Hide>
                <p>Contact us for any photography or videography ideads that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"/>
            </Image>
        </About>
    )
}


export default AboutSection
