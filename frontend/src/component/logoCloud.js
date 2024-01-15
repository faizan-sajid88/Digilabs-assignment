import Logo2 from "../assets/images/logos/Logo2.svg"
import Logo3 from "../assets/images/logos/Logo3.svg"
import Logo4 from "../assets/images/logos/Logo4.svg"
import Logo5 from "../assets/images/logos/Logo5.svg"
import Logo6 from "../assets/images/logos/Logo6.svg"
import Logo7 from "../assets/images/logos/Logo7.svg"
import Logo8 from "../assets/images/logos/Logo8.svg"
import Logo9 from "../assets/images/logos/Logo9.svg"

export default function LogoCloud(){

    return(
        <div className="logo-cloud-main">
           <div className="logo-cloud">
            <div className="logo-container">
                <ul>
                    <li><img src={Logo2} alt="cloud-logo" /></li>
                    <li><img src={Logo3} alt="cloud-logo" /></li>
                    <li><img src={Logo4} alt="cloud-logo" /></li>
                    <li><img src={Logo5} alt="cloud-logo" /></li>
                    <li><img src={Logo6} alt="cloud-logo" /></li>
                    <li><img src={Logo7} alt="cloud-logo" /></li>
                    <li><img src={Logo8} alt="cloud-logo" /></li>
                    <li><img src={Logo9} alt="cloud-logo" /></li>
                </ul>
            </div>
           </div>
        </div>
    )
}