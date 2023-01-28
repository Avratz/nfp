import { render } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  it('renders default', () => {
    const { container } = render(<Container>Container</Container>)
    expect(container).toMatchSnapshot()
  })

  it('renders as section with no padding', () => {
    const { container } = render(
      <Container as="section" padding={false}>
        section no padding
      </Container>,
    )
    expect(container).toMatchSnapshot()
  })
})
