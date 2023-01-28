import { render } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders default', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })

  it('renders with label', () => {
    const { container } = render(<Input label="Label" />)
    expect(container).toMatchSnapshot()
  })

  it('renders with placeholder', () => {
    const { container } = render(<Input placeholder="Placeholder" />)
    expect(container).toMatchSnapshot()
  })

  it('renders with intent blank', () => {
    const { container } = render(<Input intent="blank" />)
    expect(container).toMatchSnapshot()
  })
})
