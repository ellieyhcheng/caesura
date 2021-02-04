import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"

export default function Home({ data }) {
  return <Layout>
    <SEO />
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{ marginBottom: '0.5rem' }}>
          <Link
            to={node.fields.slug}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h2 style={{ marginBottom: '0.5rem' }}>
                  {node.frontmatter.title}{" "}
                  <span style={{ fontSize: '0.9rem', marginLeft: '1rem' }}>
                    [{node.frontmatter.date}]
                  </span>
                </h2>
                <p>{node.excerpt}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`