
import React from "react";
import styled from "styled-components";
import Tag from "../elements/Tag";

const StyledWrapper = styled.div`
   margin-bottom: 10px;
`

const TagSection = ({ tags }: TagProps) => {
  const tagList = tags ? tags : [];

  return (
    <StyledWrapper>
      {tagList.map((name) => {
        return <Tag>{name}</Tag>;
      })}
    </StyledWrapper>
  )
}

interface TagProps {
  tags: string[];
}

export default TagSection;
