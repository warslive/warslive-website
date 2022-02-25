import styled from "styled-components";

import Link from "../../Link";
import { Feed } from "../../../types/feed";
import React from "react";

interface FeedCardProps {
  data: Feed;
}

const FeedCard: React.FC<FeedCardProps> = ({
  data: { title, desc, link, thumbnail_url },
}: FeedCardProps) => {
  return (
    <Container href={link}>
      <Frame>
        <FrameImage
          src={thumbnail_url}
          alt={`${title} Demo`}
          width={1920}
          height={1080}
        />
      </Frame>
      <Content>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Source>
          <Social>
            <Icon className="ri-twitter-fill" />
            <Handle>by @t_ThinkTank</Handle>
          </Social>
          <Time>15:41</Time>
        </Source>
      </Content>
    </Container>
  );
};

const Container = styled(Link)`
  position: relative;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: calc(100% - 10px);
  }
`;

const Frame = styled.div`
  display: flex;
  height: 200px;
  overflow: hidden;
  padding: 20px 20px 10px;
`;

const FrameImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 24px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  opacity: 0.75;
`;

const Source = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.tiny};
`;

const Social = styled.div`
  display: flex;
`;

const Icon = styled.i`
  margin-right: 5px;
`;

const Handle = styled.span``;

const Time = styled.span``;

export default FeedCard;
