import { ReactElement } from 'react'
import { Link } from 'remix'
import RemixLogo from './RemixLogo'

function HeaderContent(): ReactElement {
  return (
    <div className="container">
      <Link to="/" title="Remix">
        <RemixLogo />
      </Link>
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://remix.run/docs">Remix Docs</a>
          </li>
          <li>
            <a href="https://github.com/remix-run/remix">GitHub</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderContent
