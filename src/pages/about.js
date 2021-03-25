import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <h1>Meet us here</h1>

        <Link to="./Joe" color="default">
            <div style={{borderTop:"5px groove lightGrey", height:"25vh", width:"90.3vw"}}>
                <StaticImage
                    src="../images/Joe.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Daniel Booth"
                    style={{ marginBottom: `1.45rem`,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                        width: "25vw",
                        height: "100%",
                        float: "left"}}
                />
                <h2 style={{float:"left", display:"block", color:"black"}}>Joe Targett</h2>
                <p style={{paddingTop:"5vh", paddingLeft:"25vw", color:"black", position:"absolute", width:"40vw"}}>hello</p>
            </div>
        </Link>
        <Link to="./Dan" color="default">
            <div style={{borderTop:"5px groove lightGrey", height:"25vh", width:"90.3vw"}}>
                <StaticImage
                    src="../images/Dan.png"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Daniel Booth"
                    style={{ marginBottom: `1.45rem`,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                        width: "25vw",
                        height: "100%",
                        float: "left"}}
                />
                <h2 style={{float:"left", display:"block", color:"black"}}>Daniel Booth</h2>
                <p style={{paddingTop:"5vh", paddingLeft:"25vw", color:"black", position:"absolute", width:"40vw"}}>hello</p>
            </div>
        </Link>

        <Link to="./Kim" color="default">
            <div style={{borderTop:"5px groove lightGrey", height:"25vh", width:"90.3vw"}}>
                <StaticImage
                    src="../images/golden-cirlce.png"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Daniel Booth"
                    style={{ marginBottom: `1.45rem`,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                        width: "25vw",
                        height: "100%",
                        float: "left"}}
                />
                <h2 style={{float:"left", display:"block", color:"black"}}>Kimberly Mabika</h2>
                <p style={{paddingTop:"5vh", paddingLeft:"25vw", color:"black", position:"absolute", width:"40vw"}}>hello</p>
            </div>
        </Link>
    </Layout>
)

export default aboutPage