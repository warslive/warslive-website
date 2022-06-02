import styled from "styled-components";

const LiveFeed: React.FC = () => {
  return (
    <Container>
      <OneFeed>
        <Img src={"/static/images/feed/feed1.png"} />
        <Description>
          <TitleFeed>Town under control</TitleFeed>
          <DescriptionFeed>
            A few minutes ago, the town of Soumy (260k inhabitants) fell
            entirely into the hands of the Russian army.
          </DescriptionFeed>
          <Tweet>
            <Div>
              <SocialIcon className={"ri-twitter-fill"} />
              <TweetPseudo>by @L_ThinkTank</TweetPseudo>
            </Div>
            <Horaire>15h42</Horaire>
          </Tweet>
        </Description>
      </OneFeed>
    </Container>
  );
};

const Container = styled.section``;
const OneFeed = styled.div`
  border-radius: 10px;
  background-color: #232323;
  margin: 10px;
  padding-top: 10px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 90%;
`;
const Description = styled.div`
  margin: 10px;
`;
const TitleFeed = styled.h2`
  font-size: 15px;
  margin-bottom: 10px;
  @media screen and (min-width: 1020px) {
    font-size: 20px;
  }
`;
const SocialIcon = styled.i``;

const DescriptionFeed = styled.p`
  color: #a4a4a4;
  font-size: 10px;
  @media screen and (min-width: 1020px) {
    font-size: 15px;
  }
`;
const Tweet = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;
const Div = styled.div`
  display: flex;
`;
const TweetPseudo = styled.p`
  font-size: 8px;
  display: flex;
  align-items: center;
`;
const Horaire = styled.p`
  font-size: 10px;
  display: flex;
  align-items: center;
`;

export default LiveFeed;
