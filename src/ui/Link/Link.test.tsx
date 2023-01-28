import { render } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('renders default', () => {
    const { container } = render(<Link href="href">Link</Link>)
    expect(container).toMatchSnapshot()
  })
})
