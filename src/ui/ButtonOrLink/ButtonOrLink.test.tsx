import { render } from '@testing-library/react'
import { ButtonOrLink } from './ButtonOrLink'

describe('ButtonOrLink', () => {
  it('renders default', () => {
    const { container } = render(<ButtonOrLink>link</ButtonOrLink>)
    expect(container).toMatchSnapshot()
  })
})
