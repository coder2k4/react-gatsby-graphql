import React from "react"
import styled from "styled-components"
import { FaMoneyCheck, GiEarthSpit, MdAirplanemodeActive, MdTimer } from "react-icons/all"


const Stats = () => {

  const data = [
    {
      icon: (<GiEarthSpit />),
      title: "Fastest Support",
      desc: "Access any game"
    },
    {
      icon: (<MdAirplanemodeActive />),
      title: "Fastest Support",
      desc: "Access any game"
    },
    {
      icon: (<MdTimer />),
      title: "Fastest Support",
      desc: "Access any game"
    },
    {
      icon: (<FaMoneyCheck />),
      title: "Fastest Support",
      desc: "Access any game"
    }
  ]

  return (
    <StatsContainer>
      <Heading>HEAAAADDDDDDDDDDD</Heading>
      <Wrapper>{data.map((item, index) =>
        (<StatsBox>
          <Icon>{item.icon}</Icon>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
        </StatsBox>))}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats


const StatsContainer = styled.div`
width: 100%;
background: #fff;
color: #000000;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem calc((100vw - 1300px ) / 2);
`
const Heading = styled.h1`
text-align: start;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 3rem;
padding: 0 2rem;
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px,1fr));
grid-gap: 10px;
`

const StatsBox = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`
const Icon = styled.div`
font-size: 3rem;
margin-bottom: 1rem;
`
const Title = styled.p`

font-size: clamp(1rem ,2.5vw, 1.5rem);
margin-bottom: 0.5rem;
`
const Desc = styled.p`

`
