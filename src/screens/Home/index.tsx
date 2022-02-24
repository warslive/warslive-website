import styled from "styled-components";

import Head from "@components/Head";
import Map from "@components/Map";

const Home: React.FC = () => {
  return (
    <Container>
      <Head title={"All the latest news about world conflicts"} />
      <Map />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
