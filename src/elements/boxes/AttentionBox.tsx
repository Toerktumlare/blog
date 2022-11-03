import React, { ReactNode } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai'
import { BiErrorAlt } from 'react-icons/bi'

const StyledWrapper = styled("div")<WrapperStyled>`
  border-left-width: 8px;
  border-left-style: solid;
  border-left-color: ${props => props.borderColor || 'var(--primary-color)'};
  border-radius : 5px;
  background-color: ${props => props.backgroundColor || 'var(--secondary-color)'};
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 21px;
  color: ${props => props.textColor || 'var(--font-color)'};
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

export const AttentionBox = ({ children, type }: BoxProps) => {
  let header = null;
  let backgroundColor = null;
  let borderColor = null;
  let textColor = null;
  if (type == "info") {
    backgroundColor = 'var(--info-color)';
    borderColor = 'var(--dark-info-color)';
    textColor = 'var(--font-dark-color)';
    header = (
      <>
        <Icon>
          <AiOutlineInfoCircle size={25} style={{ verticalAlign: 'middle' }} />
        </Icon>
        info
      </>
    )
  } else if (type == "warning") {
    backgroundColor = 'var(--warning-color)';
    borderColor = 'var(--dark-warning-color)';
    header = (
      <>
        <Icon>
          <AiOutlineWarning size={25} style={{ verticalAlign: 'middle' }} />
        </Icon>
        warning
      </>
    )
  } else if (type == "danger") {
    backgroundColor = 'var(--danger-color)';
    borderColor = 'var(--dark-danger-color)';
    textColor = 'var(--font-color)';
    header = (
      <>
        <Icon>
          <BiErrorAlt size={25} style={{ verticalAlign: 'middle' }} />
        </Icon>
        danger
      </>
    )
  }

  return (
    <StyledWrapper borderColor={borderColor} backgroundColor={backgroundColor} textColor={textColor}>
      <Header>
        {header}
      </Header>
      <Content>
        {children}
      </Content>
    </StyledWrapper>
  )
}

interface BoxProps {
  type: string,
  children: ReactNode
}

interface WrapperStyled {
  borderColor: string | null,
  backgroundColor: string | null,
  textColor: string | null
}