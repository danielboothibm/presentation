import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuizPage = () => (
    <Layout>
        <SEO title="Quiz"/>
        <h1 style={{textAlign:"center"}}>Quiz on what you have learned from this website</h1>

    </Layout>
)

export default QuizPage