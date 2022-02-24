import styled from "styled-components";

import Head from "@components/Head";

const Home: React.FC = () => {
  return (
    <>
      <Head title={"All the latest news about world conflicts"} />
      <Container>{/* <Map /> */}</Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  // TODO: delete this
  background: red;
  height: 100vh;
`;

export default Home;
