import styled from "styled-components";
import Link from "next/link";
import StyledNavLink from "./StyledNavLink";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/" passHref>
          <StyledNavLink active={router.pathname === "/"}>Home</StyledNavLink>
        </Link>
        <Link href="/product" passHref>
          <StyledNavLink active={router.pathname === "/product"}>
            Product
          </StyledNavLink>
        </Link>
        <Link href="/team" passHref>
          <StyledNavLink active={router.pathname === "/team"}>
            Team
          </StyledNavLink>
        </Link>
        <Link href="/account" passHref>
          <StyledNavLink active={router.pathname === "/account"}>
            Account
          </StyledNavLink>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
