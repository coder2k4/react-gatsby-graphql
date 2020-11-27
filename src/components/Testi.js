import React from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/all"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Testi = () => {

  const data = useStaticQuery(graphql`
      query MyQuery {
          allFeedbackJson {
              edges {
                  node {
                      title
                      description
                      img {
                          childImageSharp {
                              fluid {
                                  ...GatsbyImageSharpFluid
                              }
                          }
                      }
                  }
              }
          }
      }
  `)

  return (
    <Container>

      <TopLine>
        Test
      </TopLine>
      <Description>
        Просто невообразимо!
      </Description>
      <ContentWrapper>
        {data.allFeedbackJson.edges.map(feedback => (
          <Info>
            <div>
              <IoMdCheckmarkCircleOutline css={
                `
                  color: #3fffa8;
                  font-size: 2rem;
                  margin-bottom: 1rem;
`
              } />
              <h3>{feedback.node.title}</h3>
              <p>"{feedback.node.description}"</p>
            </div>
            <div>
              <Images fluid={feedback.node.img.childImageSharp.fluid}
                      alt={feedback.node.alt} />
            </div>
          </Info>
        ))}
      </ContentWrapper>
    </Container>
  )
}

export default Testi

const Container = styled.div`
width: 100%;
background: #fcfcfc;
color: #000000;
padding: 5rem calc((100vw - 1300px)/2);
height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: .75rem;
`

const Description = styled.p`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight:bold;
`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
grid-gap: 20px;
padding: 0 2rem;
@media screen and (max-width: 768px) {
grid-template-columns: 1fr;
}
`

const Info = styled.div`  
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  h3{
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-style: italic;
  }
  
  p{
  color: #3b3b3b;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  width: 300px;
  height: 500px;
`