import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import StackOverflow from "../components/StackOverflow"

const AboutWrapper = styled.div`
    display: flex;
    gap: 40px;
    padding-bottom: 50px;
    padding-top: 75px;
`

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StackOverFlowWrapper = styled.div`
  display: flex;
  padding-top: 30px;
`

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <StaticImage src="../images/city.jpg" alt="A city" width={2000} imgStyle={{ borderRadius: 10}} />
        <BioWrapper>
          <p>
            Coder by day, coder by night.
          </p>
          <p>
            +10 years development experience. I work
            at one of Scandinavia's leading software security companies. I'm a
            mediocre programmer that likes to understand how things work. Here i
            will mostly write about things i find interesting.
          </p>
          <StackOverFlowWrapper>
            <StackOverflow />
          </StackOverFlowWrapper>
        </BioWrapper>
      </AboutWrapper>
    </Layout>
  )
}

export default About;