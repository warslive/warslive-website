import styled from "styled-components";
import TimeLine from "@components/TimeLine";
import WordWidNews from "@components/WorldWideNews";

const FeedInformations: React.FC = () => {
  return (
    <Container>
      <Container2>
        <TimeLine />
        <Hr />
        <WordWidNews />
      </Container2>
    </Container>
  );
};

const Hr = styled.hr`
  background-color: white;
  margin-bottom: 25px;
`;
const Container = styled.section`
  transition: all 1s;
  z-index: -1;
  width: 77%;
  height: 100%;
  position: fixed;
  top: 30px;
  left: 0;
  background-color: #1010109e;
  @media screen and (max-width: 1100px) {
    transition: all 1s;
    width: 70%;
  }
  @media screen and (max-width: 700px) {
    transition: all 1s;
    width: 100%;
  }
`;

const Container2 = styled.section`
  transition: all 1s;
  margin: 20px 75px 0 100px;
  @media screen and (max-width: 1100px) {
    transition: all 1s;
    margin-right: 50px;
  }
  @media screen and (max-width: 700px) {
    transition: all 1s;
    margin-left: 58px;
    margin-right: 2px;
  }
`;

export default FeedInformations;
