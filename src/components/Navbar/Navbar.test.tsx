import { render } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders Navbar', () => {
    let { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})
