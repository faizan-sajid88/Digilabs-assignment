import Arrow from "../assets/images/icons/arrow-right.svg"
export default function HeroSection(){

    return(
        <div>
            <div className="hero-section">
                <div className="hero-container">
                    <div className="hero-containt">
                        <div className="hero-top">
                            <p style={{color:"#582066",fontWeight:"500"}}>Seamless experience</p>
                            <h1>Unleashing the Next Generation of Card Solutions</h1>
                            <p style={{color:"gray"}}> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        </div>
                        <div className="hero-bottem">
                            <div className="hero-btn">
                                <p>Unlock your Card</p>
                                <img src={Arrow} alt="btn-arrow" />
                            </div>
                        </div>
                    </div>
                            <small>*No credit card required</small>
                </div>
            </div>
        </div>
    )
}