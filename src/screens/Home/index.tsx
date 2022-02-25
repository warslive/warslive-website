import styled from "styled-components";

import Head from "@components/Head";
import Feed from "@components/Feed";
import Map from "@components/Map";

const Home: React.FC = () => {
  return (
    <Container>
      <Head title={"All the latest news about world conflicts"} />
      <Map />
      <Feed />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Home;
