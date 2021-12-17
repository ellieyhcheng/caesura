import React from "react"
import { Link } from 'gatsby'
import layoutStyles from "./layout.module.css"

const otherLinks = [
  {
    name: 'Github',
    link: 'https://github.com/ellieyhcheng/'
  },
  {
    name: 'Email',
    link: 'mailto:ellieyhc@gmail.com'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yu-hsi-ellie-cheng/'
  },
  { name: 'Publications', link: 'https://ellieyhcheng.github.io/publications' },
  { name: 'Resume', link: 'https://ellieyhcheng.github.io/YuHsi_Ellie_Cheng_Resume.pdf' },
]

export default function Layout({ children, data }) {
  return <div className={layoutStyles.layout}>
    <div className={layoutStyles.sidebar}>
      <h1>
        <a href="https://ellieyhcheng.github.io/">Ellie Cheng</a>
      </h1>
      <hr />
      {data ? (
        data && data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className={layoutStyles.menuLink}>
            <Link to={node.fields.slug}>
              <p>{node.frontmatter.title}</p>
            </Link>
          </div>
        ))
      ) : (
          otherLinks.map(({ name, link }, i) => (
            <div key={i} className={layoutStyles.menuLink}>
              <a href={link}>{name}</a>
            </div>
          ))
        )}
    </div>
    <div className={layoutStyles.content}>
      <div className={layoutStyles.header}>
        <div className={layoutStyles.title}>
          <Link to='/'>
            <h1>cæsura</h1>
          </Link>
          <h2>[suh·zyur·ah]</h2>
        </div>
        <p className={layoutStyles.subtitle}>... writing words to let them go</p>
      </div>
      <hr />
      <div className={layoutStyles.text}>
        {children}
      </div>
    </div>
  </div>
}
