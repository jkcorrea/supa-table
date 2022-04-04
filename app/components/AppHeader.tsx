import { PropsWithChildren, ReactElement } from 'react'
import type { User } from '@supabase/supabase-js'
import { Form, useTransition } from 'remix'

type AppHeaderProps = {
  user?: User
}

function AppHeader({ user }: PropsWithChildren<AppHeaderProps>): ReactElement {
  const transition = useTransition()
  return (
    <nav className="w-full bg-blue-50 py-3 shadow-md ">
      <div className="container flex place-content-end justify-end">
        <ul className="flex list-none gap-4 text-center">
          <li className="flex gap-2">
            {transition.state === 'submitting' ?? <em>signing out, </em>}
            {user?.email}
            {transition.state === 'submitting' ?? <em>...</em>} &nbsp;
            <Form method="post" action="/signout">
              <button
                type="submit"
                className="rounded-md bg-cyan-500 px-4 py-1 text-white shadow-lg shadow-cyan-500/50"
                disabled={transition.state === 'submitting'}
              >
                Sign Out
              </button>
            </Form>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AppHeader
