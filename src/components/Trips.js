import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

const Trips = ({heading}) => {

  const data = useStaticQuery(graphql`
      query TripsQuery {
          allTripJson {
              edges {
                  node {
                      alt
                      button
                      name
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

  function getTrips(data) {
    const tripsArray = []
    data.allTripJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index}>
          <ProductImg fluid={item.node.img.childImageSharp.fluid}
                      alt={item.node.alt} />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button to={"/trips"} primary={true} round={true} css={`position: absolute; top:420px; font-size: 14px;`}>{item.node.button}</Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductContainer>
  )
}

export default Trips


const ProductContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) / 2);
color: #fff;
`
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align:center;
  margin-bottom: 5rem;
  color: #000000;
`
const ProductWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
grid-gap: 10px;
justify-content: center;
padding: 0 2rem;
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;height: 500px;
  position: relative;
  border-radius: 10px;
  transition: .2s ease;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: .4s cubic-bezier(.075,.82,.165, 1);
  
  &:hover {
    filter: brightness(100%);
    object-fit: contain;
  }
`

const ProductInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  
  @media screen and(max-width: 480px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
display:flex;
align-items: center;
position: absolute;
top: 375px;
`
const ProductTitle = styled.div`
font-weight: 400;
font-size: 1rem;
margin-left: .5rem;
`