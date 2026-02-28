import AboutMe from "./AboutMe";
import Achievements from "./Achievement";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Jobs from "./Jobs";
import Platforms from "./Platforms";
import TechStack from "./TechStack";
import Testimonials from "./Testimonials";

export default function Page() {
  return (
    <div className="flex flex-col snap-y snap-mandatory">
      <HeroSection />       {/* 1. First impression — name, role, CTA */}
      <AboutMe />           {/* 2. Who she is — builds trust */}
      <Platforms />         {/* 3. Where she works — quick credibility */}
      <Jobs />              {/* 4. What she's done — proof of work */}
      <Achievements />      {/* 5. The numbers — hard results */}
      <Testimonials />      {/* 6. What clients say — social proof */}
      <Experience />        {/* 7. Her background — career timeline */}
      <TechStack />         {/* 8. Her tools — professional depth */}
      <ContactMe />         {/* 9. How to reach her — conversion */}
      <Footer />            {/* 10. Wrap up */}
    </div>
  )
}
