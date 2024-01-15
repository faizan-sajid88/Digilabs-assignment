import arrow from "../assets/images/icons/arrow-right2.svg"
import world from "../assets/images/icons/world-icon.svg"
import keyIcon from "../assets/images/icons/key-icon.svg"
import lockIcon from "../assets/images/icons/lock-icon.svg"
import { Link } from "react-router-dom"
export default function Feature(){

    return(
        <div>
            <div className="feature-container">
                <div className="feature-top">
                    <h1>Elevating Card Programs with Cutting-Edge Technology</h1>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link>
                        <p>
                        Compare all Pro feature
                        </p>
                        <img src={arrow} alt="arrow" />
                    </Link>
                </div>
                <div className="feature-bottem">
                    <div className="feature-bottem-box">
                        <img src={world} alt="" />
                        <h2>Globally Accepted</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className="feature-bottem-box">
                        <img src={keyIcon} alt="" />
                        <h2>Biometric Integrated</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className="feature-bottem-box">
                        <img src={lockIcon} alt="" />
                        <h2>Fully Secured</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                </div>
            </div>
        </div>
    )
}