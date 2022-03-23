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
        margin: `0 auto`,
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
    <div class = "nav-bar"
      style={{
        margin: '0 auto',
        maxWidth: 980,
      }}
    >
      <ul class = "nav-links">
          <h3>
            <a href="/"><li>Home</li></a></h3>
          <h3>
            <a href="/page-2"><li>Page 2</li></a></h3>
          <h3>
            <a href="/using-typescript"><li>Using TypeScript</li></a></h3>
      </ul>
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
