import styled from "styled-components";
import Link from "../Link";
import ROUTES from "@constants/routes";
import APP from "@constants/app";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Section>
        <Link href={ROUTES.HOME}>
          <BrandTitle>{APP.NAME}</BrandTitle>
        </Link>
        <Online>
          <span>•</span>
          50 users watching
        </Online>
      </Section>
      <Section>
        <Social>
          <SocialItem>
            <SocialLink href={"https://twitter.com/onRuntime"}>
              <SocialIcon className={"ri-twitter-fill"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={"https://github.com/onRuntime"}>
              <SocialIcon className={"ri-github-fill"} />
            </SocialLink>
          </SocialItem>
        </Social>
      </Section>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  height: 30px;
  width: calc(100% - 15px * 2);
  padding: 0 15px;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.size.small};
  background: ${({ theme }) => theme.colors.layout.darker};
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s;
`;

const BrandTitle = styled.h1`
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.text.lightest};
`;

const Online = styled.div`
  color: ${({ theme }) => theme.colors.text.light};

  span {
    margin: 0 8px;
  }
`;

const Social = styled.ul`
  display: flex;
  align-items: center;
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 14px;
  height: 14px;

  :last-child {
    margin-right: 0;
  }
`;

const SocialLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.medium};
`;

const SocialIcon = styled.i``;

export default Navbar;
