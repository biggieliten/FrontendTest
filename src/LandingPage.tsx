// import { useState } from "react";
import HeroWithTextAndButton from "./components/HeroWithTextAndButton";
import HamburgerMenu from "./components/HamburgerMenu";
import CardWithButton from "./components/CardWithButton";
import Footer from "./components/Footer";
import heroImg from "./assets/HeroImage.png";
import cardImg1 from "./assets/CardImage1.png";
import cardImg2 from "./assets/CardImage2.png";
import "./sass/LandingPage.scss";
import { useState } from "react";
import content from "./assets/content.json";
import houseSVG from "./assets/house.svg";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="landingPageContainer">
        <HeroWithTextAndButton
          headerContent={content.heroContent.header}
          textHeader={content.heroContent.textHeader}
          textContent={content.heroContent.textContent}
          buttonContent={content.heroContent.buttonText}
          imgUrl={heroImg}
          style="heroLandingPage"
        />
        <HamburgerMenu
          isOpen={isMenuOpen}
          options={["Home", "About", "Contact"]}
          onToggle={toggleMenu}
        />
        <section className="aboutSection">
          <div className="aboutContent">
            <h1 className="aboutHeader">{content.aboutSection.header}</h1>
            <div className="paragraphs">
              <div>
                <p className="ingress">{content.aboutSection.ingress}</p>
                <p>{content.aboutSection.paragraph1}</p>
              </div>
              <p>{content.aboutSection.paragraph2}</p>
            </div>
          </div>
        </section>
        <section className="cardContainer">
          <CardWithButton
            imgUrl={cardImg1}
            header={content.cardSection.card1.header}
            buttonContent={content.cardSection.card1.buttonText}
          />
          <CardWithButton
            imgUrl={cardImg2}
            header={content.cardSection.card2.header}
            buttonContent={content.cardSection.card2.buttonText}
          />
        </section>
        <Footer
          style="footer"
          text={content.footerContent.text}
          urls={content.footerContent.urls}
          svg={houseSVG}
        />
      </div>
    </>
  );
}

export default LandingPage;
