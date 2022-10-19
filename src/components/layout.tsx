import * as React from "react"
import Header from "./header"
import styled from "styled-components"
import { GlobalStyle } from "../pages";
import Footer from "./footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  background-color: var(--background-color);
  color: var(--font-color);
`;

const Layout = ({ children }: any) => {

  return (
    <>
    <Wrapper>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
    </>
  )
}

export default Layout
