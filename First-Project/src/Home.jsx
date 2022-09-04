import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";

function Home(){
    const { updateHomePage } = useGlobalContext();

    useEffect(() => updateHomePage(), []);
  
    return (
        <>
        <HeroSection />
        </>
    )
}
export default Home;