import React from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from 'react-icons/ai'

const StyledWrapper = styled.div`
  border-left: 8px solid green;
  border-radius : 5px;
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 21px;
`

const Header = styled.div`
  display: flex;
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 5px;
  align-items: center;
`

const Content = styled.div`
  font-size: 15px;
  p {
    margin-bottom: 0px;
  }
  code {
    padding-left: 5px;
    padding-right: 5px;
    background-color: green;
  }
`

const Icon = styled.div`
  margin-right: 7px;
  margin-bottom: 0px;
  
`

export const AttentionBox = ({children }: BoxProps) => {
  return (
    <StyledWrapper>
      <Header>
        <Icon>
          <AiOutlineInfoCircle size={25} style={{ verticalAlign: 'middle' }} />
        </Icon>
          info
      </Header>
      <Content>
        {children}
      </Content>
    </StyledWrapper>
  )
}

interface BoxProps {
  header: string,
  children: string
}