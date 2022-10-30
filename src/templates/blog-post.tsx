import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { DateText, LinkText } from "./styles"
import TagSection from "../components/tagSection"

const BlogPostTemplate = ({
  data: { previous, next, site, mdx: post },
  location,
  children,
}: PageProps<Queries.BlogPostBySlugQuery>) => {
  const siteTitle = site?.siteMetadata?.title || `Title`
  const tags = !post?.frontmatter?.tags ? [] : post.frontmatter.tags.replaceAll(/\s/g, '').split(',');

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header style={{ marginBottom: 30 }}>
          <h1 itemProp="headline">{post?.frontmatter?.title}</h1>
          <DateText>{post?.frontmatter?.date}</DateText>
          <TagSection tags={tags} />
        </header>
        <section itemProp="articleBody">{children}</section>
        <TagSection tags={tags} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous?.fields?.slug || ""} rel="prev">
                <LinkText>← {previous?.frontmatter?.title || ""}</LinkText>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next?.fields?.slug || ""} rel="next">
                <LinkText>{next?.frontmatter?.title} →</LinkText>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </Layout>
  )
}

export const Head = ({ data: { mdx: post } }: PageProps<Queries.BlogPostBySlugQuery>) => {
  return (
    <Seo
      title={post?.frontmatter?.title}
      description={post?.frontmatter?.description || post?.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
