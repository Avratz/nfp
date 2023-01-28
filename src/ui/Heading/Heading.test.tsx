import { render } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('renders default', () => {
    const { container } = render(<Heading>Heading</Heading>)
    expect(container).toMatchSnapshot()
  })

  it('renders as h2 with size xl', () => {
    const { container } = render(
      <Heading as="h2" size="xl">
        Heading
      </Heading>,
    )
    expect(container).toMatchSnapshot()
  })
})
