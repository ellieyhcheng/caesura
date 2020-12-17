import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function Post({ data }) {
  const post = data.markdownRemark
  let imageFluid = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout data={data}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <div style={{ width: '60%', marginBottom: '2rem' }}>
          <Img fluid={imageFluid} />
        </div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ whiteSpace: 'pre' }} />
        <br/>
        <p>[{post.frontmatter.date}]</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`