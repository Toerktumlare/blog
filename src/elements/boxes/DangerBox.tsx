import React, { ReactNode } from "react"
import { BiErrorAlt } from "react-icons/bi";
import { AttentionBox, Content, Header, Icon } from "./AttentionBox"

const DangerBox = ({ children }: DangerProps) => {
  const backgroundColor = 'var(--danger-color)';
  const borderColor = 'var(--dark-danger-color)';
  const textColor = 'var(--font-color)';
  return (
    <AttentionBox backgroundColor={backgroundColor} borderColor={borderColor} textColor={textColor}>
      <Header>
        <Icon>
          <BiErrorAlt size={25} style={{ verticalAlign: 'middle' }} />
        </Icon>
        danger
      </Header>
      <Content>
        {children}
      </Content>
    </AttentionBox>
  )
}

interface DangerProps {
  children: ReactNode
}

export default DangerBox;