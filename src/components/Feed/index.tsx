import styled from "styled-components";
import LiveFeed from "@components/LiveFeed";
import Stat from "@components/Stat";
import { useState } from "react";

const Feed: React.FC = () => {
  const [isExpand, setisExpand] = useState(false);
  const changeExpand = () => {
    if (isExpand) {
      setisExpand(false);
    } else {
      setisExpand(true);
    }
    console.log(isExpand);
  };
  return (
    <Container isExpand={isExpand} id="FeedContainer">
      <Title>Live Feed</Title>
      <ContainerTitle2>
        <Title2>Ukraine News</Title2>
        <ImgFlag src="/static/images/flag/ukraine.png" />
      </ContainerTitle2>
      <LinkImg id="LinkImg" onClick={changeExpand}>
        <SocialIcon className={"ri-earth-line"} />
      </LinkImg>
      <SectionLiveFeed>
        <LiveFeed />
        <LiveFeed />
      </SectionLiveFeed>
      <StatSection>
        <Title3 className="TitleStat">Statistics</Title3>
        <StatContent>
          <Stat />
          <Stat />
          <Stat />
          <Stat />
        </StatContent>
      </StatSection>
    </Container>
  );
};

const Container = styled.section<{ isExpand: boolean }>`
  transition: all 1s;
  padding-top: 30px;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  height: 100%;
  width: 23%;
  background-color: #101010;
  @media screen and (max-width: 700px) {
    transition: all 1s;
    ${({ isExpand }) => (isExpand ? "width: 50%" : "right: -30%")}
  }
  @media screen and (max-width: 500px) {
    transition: all 1s;
    ${({ isExpand }) => (isExpand ? "width: 85%" : "right: -30%")}
  }
  @media screen and (min-width: 760px) {
    transition: all 1s;
    width: 25%;
  }
`;

const Title = styled.h2`
  margin: 20px 0 10px 30px;
  font-size: 30px;
  font-weight: bold;
`;
const ContainerTitle2 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Title2 = styled.h3`
  font-size: 15px;
`;
const Title3 = styled.h3`
  margin: 20px 0 10px 30px;
  font-size: 30px;
  font-weight: bold;
`;
const SectionLiveFeed = styled.div`
  overflow: scroll;
  height: 75%;
  @media screen and (max-height: 1000px) {
    height: 73%;
  }
  @media screen and (max-height: 900px) {
    height: 70%;
  }
  @media screen and (max-height: 800px) {
    height: 65%;
  }
  @media screen and (max-height: 700px) {
    height: 60%;
  }
  @media screen and (max-height: 600px) {
    height: 55%;
  }
  @media screen and (max-height: 500px) {
    height: 45%;
  }
  @media screen and (max-height: 400px) {
    height: 37%;
  }
  /*
  */
`;

const StatSection = styled.div``;

const StatContent = styled.div`
  max-width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const ImgFlag = styled.img`
  width: 20px;
  margin-left: 7px;
`;

const LinkImg = styled.button`
  display: none;
  background-color: #101010;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 5px;
    right: 5px;
  }
`;
const SocialIcon = styled.i``;

export default Feed;
