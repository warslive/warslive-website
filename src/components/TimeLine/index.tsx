import styled from "styled-components";

const TimeLine: React.FC = () => {
  return (
    <Container>
      <Title>War Timeline</Title>
      <Description>From now to the past</Description>
      <AllTimeLine>
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>2014-now · Defeat ISIS</OneTimeLine>
        <Separator />
        <OneTimeLine>2014-now · Defeat ISIS</OneTimeLine>
        <Separator />
        <OneTimeLine>2014-now · Defeat ISIS</OneTimeLine>
        <Separator />
        <OneTimeLine>2014-now · Defeat ISIS</OneTimeLine>
        <Separator />
        <OneTimeLine>2014-now · Defeat ISIS</OneTimeLine>
        <Separator />
        <OneTimeLine>2014-now · Defeat ISIS</OneTimeLine>
      </AllTimeLine>
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
const AllTimeLine = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const OneTimeLine = styled.div`
  background-color: #ffa4a4;
  padding: 8px 19px;
  border-radius: 20px;
`;
const Separator = styled.div`
  min-width: 20px;
  height: 5px;
  background-color: #3d3d3d;
`;
export default TimeLine;
