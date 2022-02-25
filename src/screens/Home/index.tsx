import styled from "styled-components";

import Head from "@components/Head";
import Feed from "@components/Feed";
import Map from "@components/Map";

const Home: React.FC = () => {
  return (
    <Container>
      <Head title={"All the latest news about world conflicts"} />
      <Featured>
        <Map />
        <Feed />
      </Featured>
      <div>some content</div>
      <div>some content</div>
      <div>some content</div>
      <div>some content</div>
      <div>some content</div>
      <div>some content</div>
      <div>some content</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const Featured = styled.div`
  display: flex;
  height: calc(100vh - 30px);
`;

export default Home;
