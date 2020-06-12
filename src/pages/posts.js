import React from "react"
import Layout from "../components/layout"
import PostArchive from '../components/postArchive'
import PostListing from '../components/postListing'

const Posts = ({location}) => (
  <Layout location={location}>
    <PostListing />
    <PostArchive />
  </Layout>
)

export default Posts
