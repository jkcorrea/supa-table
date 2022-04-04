import { PropsWithChildren, ReactElement } from 'react'

function SiteLayout({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <div>
      <header>{/* Header content goes here..HeaderContent? */}</header>
      <div>
        <div className="container mx-auto">{children}</div>
      </div>
      <footer>{/* Footer content goes here..FooterContent? */}</footer>
    </div>
  )
}

export default SiteLayout
