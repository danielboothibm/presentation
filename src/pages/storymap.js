import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"


const StorymapPage = () => (
    <Layout>
      <SEO title="Showcase" />
      <h1>Showcase</h1> 
      <p>The Showcase is a chance for the team to get feedback from stakeholders on the completed work and to discuss and adapt the backlog and prioritization. All who have an interest in the product, especially key stakeholders, are encouraged to attend this meeting.
Much more than a demo, this is a chance for the Product Owner and team to listen and learn from the feedback from the stakeholders and to make adjustments to next steps based on this new information. This is often called "inspect and adapt." Since the Product Owner has worked closely with the team during the iteration, she will use this time to confirm the work has been completed to the sufficient level. This may be the first time the outside stakeholders have seen the new work, so this is a key time to get feedback from them. The team then takes this learning and discusses, at a high level, the general plan and backlog prioritization for the planning session for the next iteration.</p>
      <StaticImage
      src="../images/storymap.png"
      width={1000}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A story map"
      style={{ marginBottom: `1.45rem` }}
    />
    </Layout>
  )

export default StorymapPage