import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"


const FishbonePage = () => (
    <Layout>
      <SEO title="Root Cause Analysis" />
      <h1>Route Cause Analysis</h1> 
      <p>Too often we grasp at solutions to symptoms of the problem without understanding what is causing the problem. Symptoms are often the 'tip of the iceberg', it is what presents itself and these symptoms often mask the real reason for why the problem is happening. RCA helps us get behind the obvious to determine what is the true cause for the problem. In Agile we use several simple techniques (5 Why, Fishbone, and Pareto) for root cause analysis that do not require sophisticated statistical analysis.</p>
      <StaticImage
      src="../images/fishbone.png"
      width={1000}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    </Layout>
  )

export default FishbonePage