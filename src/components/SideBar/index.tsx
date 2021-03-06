import styled from "styled-components";
import { useState } from "react";
import FeedInformations from "@components/FeedInformations";

const Navbar: React.FC = () => {
  const [etat, setEtat] = useState(false);
  const show = () => {
    setEtat(true);
  };
  const hide = () => {
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
            <SocialIcon isExpand={etat} className={"ri-map-2-line"} />
          </LinkImg>
          <LinkImg onClick={show}>
            <SocialIcon2 isExpand={etat} className={"ri-live-line"} />
          </LinkImg>
        </GroupImage>
      </Section1>
    </Container>
  );
};

const Section1 = styled.div``;
const SocialIcon = styled.i<{ isExpand: boolean }>`
  font-size: 30px;
  ${({ isExpand }) => (isExpand ? "color: #FFF" : "color: #2fcc71")}
`;
const SocialIcon2 = styled.i<{ isExpand: boolean }>`
  font-size: 30px;
  ${({ isExpand }) => (isExpand ? "color: #2fcc71" : "color: #FFF")}
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
