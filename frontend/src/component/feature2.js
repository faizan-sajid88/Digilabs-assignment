import arrow from "../assets/images/icons/arrow-right2.svg"
import phone from "../assets/images/icons/mobile-photo.svg"
import stick from "../assets/images/icons/stick-icon.svg"
import stars from "../assets/images/icons/starts-icon.svg"
import creditCard from "../assets/images/icons/creditcard-icon.svg"
import loading from "../assets/images/icons/loadingbar-icon.svg"
import zoom from "../assets/images/icons/zoom-icon.svg"
import { Link } from "react-router-dom"

export default function Feature2(){

    return(
        <div>
        <div className="feature-2-container">
            <div className="feature-2-top">
            <h1>Elevating Card Programs with Cutting-Edge Technology</h1>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link>
                        <p>
                        Compare all Pro feature
                        </p>
                        <img src={arrow} alt="arrow" />
                    </Link>
            </div>
            <div className="feature-2-bottem">
                <div className="feature-2-bottem-left">
                    <div className="phone-img-div">
                        <img className="stick-icon" src={stick} alt="stick-icon" />
                        <img className="mobile-icon" src={phone} alt="phone-icon" />
                    </div>
                </div>
                <div className="feature-2-bottem-right">
                       <div className="feature-2-right-card-div">
                        <img className="start-icon" src={stars} alt="stars" />
                        <div className="feature-2-right-card">
                            <div className="card-top">
                                <div className="card-top-head">
                            <h3>Spending</h3>
                                 <img src={zoom} alt="zoom" />         
                                </div>
                            <div>
                                <img src={creditCard} alt="" />
                                <small> 9349 visa card</small>
                            </div>
                            </div>
                            <div className="card-mid">
                            <h1>127.14 <small>USD</small></h1>
                            <div>
                               <small>vs last week</small>
                                <small>Last Purchased ( feb 24 19:59 UTC-5)</small>
                            </div>
                            </div>
                            <div className="card-bottem">
                            
                            <div>
                               <small>400 USD</small>
                                <small>1000 USD</small>
                                <small>5000 USD</small>
                            </div>
                            <img className ="loading-img" src={loading} alt="loading" />
                            </div>
                        </div>
                       </div>
                </div>
            </div>
        </div>
        </div>
    )
}