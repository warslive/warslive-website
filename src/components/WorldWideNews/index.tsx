import styled from "styled-components";

const WorldWideNews: React.FC = () => {
  return (
    <Container>
      <Title>WorldWide news</Title>
      <Description>All medias, photos & videos</Description>
      <NewsContainer>
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </NewsContainer>
    </Container>
  );
};

const Container = styled.section``;
const Title = styled.h2`
  font-size: 30px;
  color: #ffffff;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
const Description = styled.p`
  font-size: 15px;
  color: #ababab;
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;
const NewsContainer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  margin-top: 30px;
  @media screen and (min-height: 500px) {
    height: 210px;
  }
  @media screen and (min-height: 600px) {
    height: 310px;
  }
  @media screen and (min-height: 700px) {
    height: 410px;
  }
  @media screen and (min-height: 800px) {
    height: 510px;
  }
  @media screen and (min-height: 900px) {
    height: 610px;
  }
  @media screen and (min-height: 1000px) {
    height: 710px;
  }
  @media screen and (min-height: 1100px) {
    height: 810px;
  }
`;
const News = styled.div`
  background-color: #262626;
  width: 130px;
  height: 130px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
`;
export default WorldWideNews;
