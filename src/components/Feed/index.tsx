import Link from "@components/Link";
import styled from "styled-components";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Header href="onruntime.com">
        <Title>{"Live Feed"}</Title>
      </Header>
      <Nav>
        <CardContainer
          href={"https://onruntime.com/fr/projects/instagram-dark"}
        >
          <Frame>
            <FrameImage
              src={
                "https://onruntime.com/static/images/projects/instagram-dark-extension.jpg"
              }
              alt={"Demo"}
              width={1920}
              height={1080}
            />
          </Frame>
          <Content>
            <Tag>
              <TagItem>{"Infinity War"}</TagItem>
              <TagItem>{"La guerre"}</TagItem>
              <TagItem>{"Parabellum"}</TagItem>
            </Tag>
            <CardTitle>{"Breaking News: c'est la guerre"}</CardTitle>
            <Description>{"c chaud"}</Description>
          </Content>
        </CardContainer>
      </Nav>
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 30px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  border-right: 1px solid ${({ theme }) => theme.colors.layout.light};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: transparent;
    pointer-events: none; */
  }
`;

const Header = styled(Link)<{ active?: boolean }>`
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.layout.light};
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  font-weight: ${({ theme }) => theme.weight.medium};
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.layout.darker};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const Title = styled.h1`
  white-space: nowrap;
  margin-left: 5px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 12px;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.layout.darkest};
    width: 100%;
    height: 60px;
    align-items: center;
    overflow-y: hidden;
    overflow-x: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.layout.light};
    flex-direction: row;
    padding: 0;
    pointer-events: auto;
  }
`;

const CardContainer = styled(Link)`
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

const CardTitle = styled.h3`
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

export default Sidebar;
