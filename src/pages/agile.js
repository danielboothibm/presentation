import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const agilePage = () =>(
    <Layout>
        <SEO title="What is agile?"/>
        <h1 style={{textAlign: "center"}}>Agile Methodology</h1>
        <div style={{float:"left", width:"40vw"}}>
            <p>
                The Agile methodology is a way to manage a project by breaking it up into several phases.
                It involves constant collaboration with stakeholders and continuous improvement at every stage.
                Once the work begins, teams cycle through a process of planning, executing, and evaluating.
                Continuous collaboration is vital, both with team members and project stakeholders.
            </p>
            <p>
                So what is Agile methodology in project management?
                It’s a process for managing a project that involves constant collaboration and working in iterations.
                Today, the word Agile can refer to these values and the frameworks for implementing them,
                including Scrum, Kanban, Extreme Programming (XP), and Adaptive Project Framework (APF).
            </p>
        </div>
        <StaticImage src="../images/Agile.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            style={{ marginBottom: `1.45rem`,
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                width: "25vw",
            }}/>
        <br/>
    </Layout>
)

export default agilePage