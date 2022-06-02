import styled from "styled-components";
import { useState } from "react";
import FeedInformations from "@components/FeedInformations";

const Navbar: React.FC = () => {
  const [etat, setEtat] = useState(false);
  const show = () => {
    const logo = document.querySelector<HTMLElement>(".ri-map-2-line");
    const logo2 = document.querySelector<HTMLElement>(".ri-live-line");
    if (logo && logo2) {
      logo.style = "color: #FFF";
      logo2.style = "color: #2fcc71";
    }
    setEtat(true);
  };
  const hide = () => {
    const logo = document.querySelector<HTMLElement>(".ri-map-2-line");
    const logo2 = document.querySelector<HTMLElement>(".ri-live-line");
    if (logo && logo2) {
      logo.style = "color: #2fcc71";
      logo2.style = "color: #FFF";
    }

    setEtat(false);
  };

  const Affichage = () => {
    if (etat === true) {
      return <FeedInformations />;
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Section1>
        <Affichage />
        <GroupImage>
          <LinkImg onClick={hide}>
            <SocialIcon className={"ri-map-2-line"} />
          </LinkImg>
          <LinkImg onClick={show}>
            <SocialIcon className={"ri-live-line"} />
          </LinkImg>
        </GroupImage>
      </Section1>
    </Container>
  );
};

const Section1 = styled.div``;
const SocialIcon = styled.i`
  font-size: 30px;
`;
const Container = styled.section`
  transition: all 1s;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background-color: #101010;
  @media screen and (max-width: 700px) {
    transition: all 1s;
    width: 50px;
  }
`;

const GroupImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkImg = styled.button`
  background-color: #101010;
  border: none;
  cursor: pointer;
  margin-top: 50px;
`;
export default Navbar;
