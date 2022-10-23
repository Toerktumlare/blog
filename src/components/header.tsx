import { useStaticQuery, graphql, Link } from "gatsby"
import * as React from "react"
import { SiteMetadata, useSiteMetadata } from "../hooks/site-metadata"

const Header: React.FC = () => {
  const siteMetadata: SiteMetadata = useSiteMetadata()
  return (
    <header className="terminal-nav">
      <div className="terminal-logo">
        <div className="logo terminal-prompt">
          <Link className="menu-item" to="/">Without followers, evil cannot spread</Link>
        </div>
      </div>
      <nav className="terminal-menu">
        <ul>
          <li>
            <Link className="menu-item" to="/">home</Link>
          </li>
          <li>
            <Link className="menu-item" to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
