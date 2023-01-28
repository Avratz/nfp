import { render } from '@testing-library/react'
import { Badge } from './Badge'

describe('Avatar', () => {
  it('renders outline', () => {
    const { container } = render(<Badge variant="outline">outline</Badge>)
    expect(container).toMatchSnapshot()
  })

  it('renders solid', () => {
    const { container } = render(<Badge variant="solid">solid</Badge>)
    expect(container).toMatchSnapshot()
  })
})
