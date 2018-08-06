import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
      <div class="container content">
      <div className="column is-8 is-offset-2">
          {posts
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ paddingBottom: '2em' }}
                key={post.id}
              >
                <p>
                  <Link className="title is-size-2 has-text-weight-bold is-bold-light has-text-primary" to={post.fields.slug} >
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  {/* <Link className="button is-small" to={post.fields.slug}>
                    Read Post →
                  </Link> */}
                </p>
              </div>
            ))}
        </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
