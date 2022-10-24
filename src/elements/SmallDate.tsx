import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
`

const Text = styled.p`
  font-size: 14px;
  color: var(--color-gray-700);
`

const SmallDate = ({ children }: DateProps) => {
  return (
    <StyledWrapper>
      <Text>{children}</Text>
    </StyledWrapper>
  )
}

interface DateProps {
  children: string
}

export default SmallDate;
