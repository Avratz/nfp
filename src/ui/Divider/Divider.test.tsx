import { render } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders default', () => {
    const { container } = render(<Divider />)
    expect(container).toMatchSnapshot()
  })

  it('renders vertical', () => {
    const { container } = render(<Divider vertical />)
    expect(container).toMatchSnapshot()
  })
})
