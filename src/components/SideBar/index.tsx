import styled from "styled-components";
import { useState } from "react";
import FeedInformations from "@components/FeedInformations";

const Navbar: React.FC = () => {
  const [etat, setEtat] = useState(false);
  const show = () => {
    setEtat(true);
    console.log(etat);
  };
  const hide = () => {
    setEtat(false);
    console.log(etat);
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
            <ImageMap src={"/static/images/logo/map.svg"} />
          </LinkImg>
          <LinkImg onClick={show}>
            <ImageCam src={"/static/images/logo/cam.svg"} />
          </LinkImg>
        </GroupImage>
      </Section1>
    </Container>
  );
};

const Section1 = styled.div``;

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

const ImageMap = styled.img`
  transition: all 1s;
  width: 30px;
  @media screen and (max-width: 700px) {
    transition: all 1s;
    width: 20px;
  }
`;

const ImageCam = styled.img`
  transition: all 1s;
  width: 30px;
  @media screen and (max-width: 700px) {
    transition: all 1s;
    width: 20px;
  }
`;

export default Navbar;
