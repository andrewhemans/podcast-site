import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Episode from "../components/episode"

import "./App.sass";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
    <h1 className="title has-text-centered">Podcasts</h1>
    <Episode />
    </div>
  </Layout>
)

export default IndexPage
