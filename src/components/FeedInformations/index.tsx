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
  @media screen and (max-width: 700px) {
    transition: all 1s;
    width: 100%;
  }
  @media screen and (min-width: 760px) {
    transition: all 1s;
    width: 75%;
  }
`;

const Container2 = styled.section`
  transition: all 1s;
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 15px;
  @media screen and (max-width: 700px) {
    transition: all 1s;
    margin-left: 58px;
  }
`;

export default FeedInformations;
