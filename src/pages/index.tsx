import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { createGlobalStyle } from "styled-components"
import MajorHeading from "../elements/MajorHeading"

export const GlobalStyle = createGlobalStyle`
  :root {
    --global-font-size: 15px;
    --global-line-height: 1.4em;
    --global-space: 10px;
    --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
    serif;
    --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
    serif;
    --background-color: #222225;
    --page-width: 60em;
    --font-color: #e8e9ed;
    --header-font-color: #7a3496
    --color-gray-700: #a3abba
    --color-tertiary: #ffdf2c
    --invert-font-color: #222225;
    --secondary-color: #a3abba;
    --tertiary-color: #a3abba;
    --primary-color: #62c4ff;
    --error-color: #ff3c74;
    --progress-bar-background: #3f3f44;
    --progress-bar-fill: #62c4ff;
    --code-bg-color: #3f3f44;
    --input-style: solid;
    --display-h1-decoration: none;
    --spacing-4: 4rem;
    --spacing-0: 0;
    --spacing-16: 4rem;
  }
  body {
    background-color: var(--background-color);
    color: var(--font-color);
  }

  ol li::before {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul > li::after {
    content: none;
  }

  code::after, code::before {
    content: none;
  }

  .mermaid {
    margin-top: 4em;
    margin-bottom: 4em;

  }

  .bio-avatar {
    margin-right: var(--spacing-4);
    margin-bottom: var(--spacing-0);
    min-width: 50px;
    border-radius: 100%;
  }

  .bio {
    display: flex;
    margin-bottom: var(--spacing-16);
  }

  .bio p {
    margin-top: 0.8em;
    margin-bottom: var(--spacing-0);
  }
`

const BlogIndex = ({ data, location }: PageProps<Queries.IndexPageQuery>) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <>
      <Layout>
        <ul>
          {posts.map((post: any) => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <MajorHeading>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </MajorHeading>
                  <small>{post.frontmatter.date}</small>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description" />
                  </section>
                </article>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />


export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`