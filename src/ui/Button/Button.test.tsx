import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render default', () => {
    const { container } = render(<Button>default</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should render primary', () => {
    const { container } = render(<Button intent="primary">primary</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should render accent', () => {
    const { container } = render(<Button intent="accent">accent</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should render primaryDark', () => {
    const { container } = render(
      <Button intent="primaryDark">primaryDark</Button>,
    )
    expect(container).toMatchSnapshot()
  })
})
