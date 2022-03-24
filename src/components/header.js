import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  navContainer,
  navBar,
  navLinks,
  navLinksItem,
  navLinksText,
} from './layout.module.css'

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
    <div className={navContainer}
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <div className = {navBar}>
        <ul className = {navLinks}>
            <h3>
              <li className = {navLinksItem}>
              <Link to="/" className={navLinksText}>
                Home
              </Link>
              </li>
            </h3>
            <h3>
              <li className = {navLinksItem}>
              <Link to="/page-2" className={navLinksText}>
                Page 2
              </Link>
              </li>
            </h3>
            <h3>
              <li className = {navLinksItem}>
              <Link to="/using-typescript" className={navLinksText}>
                Using TypeScript
              </Link>
              </li>
            </h3>
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
