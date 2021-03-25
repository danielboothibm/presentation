import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <h1>Meet us here</h1>
    </Layout>
)

export default aboutPage