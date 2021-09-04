//Import Sections
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import ServicesLandingPage from "../../LandingPage/components/Services";
import Info from "../../LandingPage/components/Info";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../../LandingPage/components/Info/Data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const OfficialHome = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      {/* <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Info {...homeObjFour} /> */}
      <Testimonials />
      <ServicesLandingPage />
    </Container>
  );
};

export default OfficialHome;
