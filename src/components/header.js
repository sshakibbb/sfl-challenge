import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: `1.05rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div class = "navigation"
      style={{
        margin: '0 auto',
        maxWidth: 980,
      }}
    >
      <div class = "nav-bar">
        <ul class = "nav-links">
            <h3><li><a href="/">Home</a></li></h3>
            <h3><li><a href="/page-2">Page 2</a></li></h3>
            <h3><li><a href="/using-typescript">Using TypeScript</a></li></h3>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
