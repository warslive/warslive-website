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
      <Title>
        Ukraine News <ImgFlag src="/static/images/flag/ukraine.png" />
      </Title>
      <LinkImg id="LinkImg" onClick={changeExpand}>
        <SocialIcon className={"ri-earth-line"} />
      </LinkImg>
      <SectionLiveFeed>
        <LiveFeed />
        <LiveFeed />
      </SectionLiveFeed>
      <StatSection>
        <Title>Statistics</Title>
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
    width: 40%;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

const SectionLiveFeed = styled.div`
  overflow: scroll;
  height: 80%;
  @media screen and (max-height: 900px) {
    height: 80%;
  }
  @media screen and (max-height: 850px) {
    height: 75%;
  }
  @media screen and (max-height: 700px) {
    height: 70%;
  }
  @media screen and (max-height: 600px) {
    height: 65%;
  }
  @media screen and (max-height: 500px) {
    height: 60%;
  }
  @media screen and (max-height: 400px) {
    height: 55%;
  }
`;

const StatSection = styled.div``;

const StatContent = styled.div`
  max-width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
`;
const ImgFlag = styled.img``;

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
