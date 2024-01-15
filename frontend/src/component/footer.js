import logo from "../assets/images/logos/main-logo.svg"
import github from "../assets/images/icons/github-logo.svg"
import linkedin from "../assets/images/icons/linkedin-logo.svg"
import discord from "../assets/images/icons/discord-logo.svg"

export default function Footer(){

    return(
        <div>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-containt">
                        <img src={logo} alt="logo" />
                        <p>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</p>
                    </div>
                </div>
                <div className="footer-mid">
                   <div className="footer-mid-containt">
                    <ul className="footer-top-ul">
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Compony</h6>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> About us</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Pricing</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Contact</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Features</a>
                                </li>
                            </ul>
                        </li>

                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Product</h6>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Figma design system</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Ios kit</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Android kit</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Wireframe</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Resources</h6>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Templates</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Landing pages</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Documentation</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Comp library</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Legal</h6>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Privacy policy</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> terms & Conditions</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Disclaimer</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Affiliate Programme</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Support</h6>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Help center</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Raise ticket</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> Report</a>
                                </li>
                                <li className="footer-inner-li">
                                     <a href="www.google.com"> refund</a>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                   </div>
                </div>
                <div className="footer-bottem">
                 <div className="footer-social">
                    <ul>
                        <a><img src={github} alt="github" /></a>
                        <a><img src={linkedin} alt="linkedin" /></a>
                        <a><img src={discord} alt="discord" /></a>
                    </ul>
                 </div>
                 <div className="copyright">
                    <p>@ 2023 Mode UI Inc. All Rights Reserved</p>
                 </div>
                </div>
            </div>
        </div>
    )
}