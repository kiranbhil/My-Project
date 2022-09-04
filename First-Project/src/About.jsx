import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";

function About(){
    const { udpateAboutPage } = useGlobalContext();

    useEffect(() => udpateAboutPage(), []);
  
    return(
        <>
        <HeroSection />
        </>
    )
}
export default About;