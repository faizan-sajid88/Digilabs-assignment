import AnnouncmentBar from "./announcmentBar";
import CallToAction from "./callToAction";
import Details from "./details";
import Feature from "./feature";
import Feature2 from "./feature2";
import Footer from "./footer";
import HeroSection from "./heroSection";
import LogoCloud from "./logoCloud";
import NavBar from "./navbar";
import Testimonial from "./testimonial";

export default function WebLayout(){

    return(
        <div>
            <AnnouncmentBar />
            <NavBar />
            <HeroSection />
            <LogoCloud />
            <Feature />
            <Feature2 />
            <Details />
            <Testimonial />
            <CallToAction />
            <Footer />
        </div>
    )
}