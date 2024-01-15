import AvtarImage from "../assets/images/bacground/Image.png"
import wiseLogo from "../assets/images/logos/Logo5.svg"
import star from "../assets/images/icons/rating-star-icon.svg"

export default function Testimonial(){

    return(
        <div>
         <div className="testimonial-container">
            <div className="testimonial-top">
<img src={wiseLogo} alt="wise-logo" />
<h3>
I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.
</h3>
            </div>
            <div className="testimonial-bottem">
<div className="testimonial-avatar">
    <div className="avatar-details">
        <img src={AvtarImage} alt="avatar" />
        <h3>Nick Babich</h3>
        <p>Lead Developer</p>
    </div>
    <div className="avatar-rating">
        <ul>
            <li>
                <img src={star} alt="rating" />
            </li>
            <li>
                <img src={star} alt="rating" />
            </li>
            <li>
                <img src={star} alt="rating" />
            </li>
            <li>
                <img src={star} alt="rating" />
            </li>
        </ul>
    </div>
</div>
            </div>
         </div>
        </div>
    )
}