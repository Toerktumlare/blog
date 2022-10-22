import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
   border-radius : 5px;
   background-color: var(--header-font-color);
   display: inline-block;
   margin-right: 6px;
`

const Text = styled.p`
  font-size: 10px;
  text-align: center;
  margin: 2px 10px 2px;
`

const Tag = ({ children }: TagProps) => {
  return (
    <StyledWrapper>
      <Text>#{children}</Text>
    </StyledWrapper>
  )
}

interface TagProps {
  children: string
}

export default Tag;
