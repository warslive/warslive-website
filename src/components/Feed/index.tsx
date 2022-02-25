import styled from "styled-components";
import React from "react";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>{"Live Feed"}</Title>
        <SubTitle>{"Ukraine news 🇺🇦"}</SubTitle>
      </Header>
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 25%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  margin-top: 5px;
`;

export default Feed;
