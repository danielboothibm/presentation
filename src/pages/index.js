import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{textAlign: "center"}}>Welcome to the team DevOps presentation</h1>
    <ul style={{listStyleType:"square", textAlign:"center", fontWeight: "bold"}}>
      <li>Why did you choose an apprenticeship and why IBM?</li>
      <li>How did you get this far, give us a summary of your educational background and previous work experience?</li>
      <li>Explain what you have learned about yourself during this induction, and what do you hope to achieve in the following year?</li>
    </ul>
    <StaticImage
      src="../images/golden-circle.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="The Golden Circle"
      style={{ marginBottom: `1.45rem`,
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      width: "25vw"}}
    />
  </Layout>
)

export default IndexPage
