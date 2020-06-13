import React from "react"
import Layout from "../components/layout"
import ProjectArchive from '../components/projectArchive'
import ProjectListing from '../components/projectListing'

const Projects = (props) => {
  return(
    <Layout location={props.location}>
      <ProjectListing />
      <ProjectArchive />
    </Layout>
  )}

export default Projects
