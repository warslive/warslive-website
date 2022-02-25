import styled from "styled-components";
import { Feed } from "../../../types/feed";
import FeedCard from "../Card";

interface FeedListProps {
  data: Feed[];
}

const FeedList: React.FC<FeedListProps> = ({ data }: FeedListProps) => {
  return (
    <Container>
      {data.map((feed: Feed, key: number) => (
        <FeedCard key={key} data={feed} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: initial;
  }
`;

export default FeedList;
