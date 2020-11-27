import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testi from "../components/Testi"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading={"Cronus Zen futures"} />
    <Testi />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
