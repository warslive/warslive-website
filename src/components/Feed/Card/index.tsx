import styled from "styled-components";

import Link from "../../Link";
import { Feed } from "../../../types/feed";
import React from "react";

interface FeedCardProps {
  data: Feed;
}

const FeedCard: React.FC<FeedCardProps> = ({
  data: { title, desc, link, thumbnail_url, tags },
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
        <Tag>
          {tags.map((tag: string, key: number) => (
            <TagItem key={key}>{tag}</TagItem>
          ))}
        </Tag>
        <Title>{title}</Title>
        <Description>{desc}</Description>
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

const Tag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const TagItem = styled.li`
  margin: 2px;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme.size.small};
  padding: 2px 12px;
  background-color: rgba(255, 255, 255, 0.2);

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.regular};
  opacity: 0.75;
`;

export default FeedCard;
