import React, { ReactNode } from "react"
import { FaQuoteLeft } from "react-icons/fa";
import { AttentionBox, Content, Footer, Header, Icon } from "./AttentionBox"

const Blockquote = ({ children, source }: QuoteProps) => {
  const backgroundColor = 'transparent';
  return (
    <AttentionBox fontSize={22} backgroundColor={backgroundColor}>
      <Header>
        <Icon>
          <FaQuoteLeft size={35} style={{ verticalAlign: 'middle' }} />
        </Icon>
      </Header>
      <Content>
        {children}
      </Content>
      {source ? <Footer>
        {source}
      </Footer> : null}
    </AttentionBox>
  )
}

interface QuoteProps {
  source: string,
  children: ReactNode
}

export default Blockquote;