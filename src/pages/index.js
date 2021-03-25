import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new DevOps site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/golden-circle.jpeg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/fishbone/">Dan: Question 1, Fishbone Graph</Link>
    </p>
    <p>
      <Link to="/storymap/">Dan: Question 2, Story Map</Link>
    </p>
  </Layout>
)

export default IndexPage
