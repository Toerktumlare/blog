import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
`

const StackOverflow = () => {
  return (
    <StyledWrapper>
      <a href="https://stackexchange.com/users/2064278">
        <img src="https://stackexchange.com/users/flair/2064278.png?theme=dark"
          width="208"
          height="58"
          alt="profile for Toerktumlare on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          title="profile for Toerktumlare on Stack Exchange, a network of free, community-driven Q&amp;A sites"
        />
      </a>
    </StyledWrapper>
  )
}

export default StackOverflow;
