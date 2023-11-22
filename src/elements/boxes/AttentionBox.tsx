import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledWrapper = styled("div") <WrapperStyled>`
  border-left-width: 8px;
  border-left-style: solid;
  border-left-color: ${props => props.borderColor || 'var(--primary-color)'};
  border-radius : 5px;
  background-color: ${props => props.backgroundColor || 'var(--secondary-color)'};
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0px 16px;
  margin-bottom: 21px;
  color: ${props => props.textColor || 'var(--font-color)'};
  div {
    font-size: ${props => props.fontSize + "px" || 'var(--font-size)'};
    line-height: 1.2em;
  }
  em {
    color: ${props => props.textColor || 'var(--font-color)'};
  }
  a {
    text-decoration: underline;
    color: ${props => props.textColor || 'var(--font-color)'};
  }
`

export const Header = styled.div`
  display: flex;
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 5px;
  align-items: center;
`

export const Footer = styled.div`
  display: flex;
  font-style: italic;
  font-weight: bolder;
  align-items: center;
  justify-content: end;
  font-size: 16px;
`

export const Content = styled.div`
  code {
    padding-left: 5px;
    padding-right: 5px;
    background-color: green;
  }
`

export const Icon = styled.div`
  margin-right: 7px;
  margin-bottom: 0px;
`

export const AttentionBox = ({
  children,
  backgroundColor,
  borderColor,
  fontSize,
  textColor
}: BoxProps) => {
  return (
    <StyledWrapper
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
    >
      {children}
    </StyledWrapper>
  )
}

interface BoxProps {
  borderColor?: string,
  backgroundColor?: string,
  textColor?: string,
  fontSize?: number,
  children: ReactNode
}

interface WrapperStyled {
  borderColor: string | null,
  backgroundColor: string | null,
  textColor: string | null,
  fontSize?: number | null
}