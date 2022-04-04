import { ReactElement } from 'react'

function StarterKit(): ReactElement {
  return (
    <article className="mb-8 text-center">
      <h2 className="app__title text-4xl font-semibold">Remix Starter Kit</h2>
      <small className="border-1 inline-block bg-yellow-300 px-2 text-black">
        <strong>Remix</strong> with all the <em>bells</em> and <em>whistles</em>
        .
      </small>
    </article>
  )
}

export default StarterKit
