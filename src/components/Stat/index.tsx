import styled from "styled-components";

const Stat: React.FC = () => {
  return (
    <Container>
      <Value>0.90$/L</Value>
      <Title>Petrol</Title>
    </Container>
  );
};

const Container = styled.section`
  margin-right: 5px;
  background-color: #232323;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

const Value = styled.p`
  color: red;
  font-size: 15px;
`;

const Title = styled.h3`
  font-size: 10px;
`;

export default Stat;
