import logo from "../assets/images/logos/main-logo.svg"
import github from "../assets/images/icons/github-logo.svg"
import linkedin from "../assets/images/icons/linkedin-logo.svg"
import discord from "../assets/images/icons/discord-logo.svg"
import { Link } from "react-router-dom"

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
                                     <Link href="www.google.com"> About us</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Pricing</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Contact</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Features</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Product</h6>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Figma design system</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Ios kit</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Android kit</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Wireframe</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Resources</h6>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Templates</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Landing pages</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Documentation</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Comp library</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Legal</h6>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Privacy policy</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> terms & Conditions</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Disclaimer</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Affiliate Programme</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="footer-top-li">
                            <ul className="footer-inner-ul">
                                <h6>Support</h6>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Help center</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Raise ticket</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> Report</Link>
                                </li>
                                <li className="footer-inner-li">
                                     <Link href="www.google.com"> refund</Link>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                   </div>
                </div>
                <div className="footer-bottem">
                 <div className="footer-social">
                    <ul>
                        <Link><img src={github} alt="github" /></Link>
                        <Link><img src={linkedin} alt="linkedin" /></Link>
                        <Link><img src={discord} alt="discord" /></Link>
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