import styled from "styled-components";

const TimeLine: React.FC = () => {
  return (
    <Container>
      <Title>War Timeline</Title>
      <Description>From now to the past</Description>
      <AllTimeLine>
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
        <Separator />
        <OneTimeLine>now · Ukraine War</OneTimeLine>
      </AllTimeLine>
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h2`
  font-weight: 500;
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
  overflow-x: scroll;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
const OneTimeLine = styled.div`
  white-space: nowrap;
  background-color: #ffa4a4;
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  border-radius: 20px;
`;
const Separator = styled.div`
  min-width: 20px;
  height: 6px;
  background-color: #3d3d3d;
`;
export default TimeLine;
