import * as React from "react"
import Header from "./header"
import styled from "styled-components"
import { GlobalStyle } from "../pages";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  background-color: var(--background-color);
  color: var(--font-color);
`;

const Layout = ({ children }: any) => {

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="http://www.github.com/tandolf">toerktumlare</a>
      </footer>
    </Wrapper>
    </>
  )
}

export default Layout
