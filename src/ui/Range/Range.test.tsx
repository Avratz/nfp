import { render } from '@testing-library/react'
import { Range } from './Range'

describe('Range', () => {
  it('renders default', () => {
    const { container } = render(<Range unit="ETH" min={5} max={10} />)
    expect(container).toMatchSnapshot()
  })

  it('renders with label', () => {
    const { container } = render(
      <Range label="Range" unit="ETH" min={5} max={10} />,
    )
    expect(container).toMatchSnapshot()
  })
})
