import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const AboutWrapper = styled.div`
    display: flex;
    gap: 40px;
    padding-bottom: 50px;
    padding-top: 75px;
`

const BioWrapper = styled.div`
  flex-grow: 1;
`

const Text = styled.p`
  
`

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <StaticImage src="../images/city.jpg" alt="A city" width={2000} imgStyle={{ borderRadius: 10}} />
        <BioWrapper>
          <Text>
            Coder by day, coder by night.
          </Text>
          <Text>
            +10 years development experience. I work
            at one of Scandinavia's leading software security companies. I'm a
            mediocre programmer that likes to understand how things work. Here i
            will mostly write about things i find interesting.
          </Text>
        </BioWrapper>
      </AboutWrapper>
    </Layout>
  )
}

export default About;