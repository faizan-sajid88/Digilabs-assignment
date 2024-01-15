import creditCard from "../assets/images/icons/credit-card2.svg"
import headPhone from "../assets/images/icons/headphones-icon.svg"
export default function CallToAction(){

    return(
        <div>
            <div className="action-container">
                <div className="action-top">
                    <h1>
                    Unlock Limitless Possibilities with Our New Card Solutions
                    </h1>
                </div>
                <div className="action-bottem">
                    <div className="action-btn-div">
                    <a className="action-btn1">
                        <p>Unlock Your card</p>
                        <img src={creditCard} alt="credit-card" />
                    </a>
                    <a className="action-btn2">
                        <p>Unlock Your card</p>
                        <img src={headPhone} alt="headphone" />
                    </a>

                    </div>
                </div>
            </div>
        </div>
    )
}