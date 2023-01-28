import { render } from '@testing-library/react'
import { Footer } from './Footer'

jest.mock('@/assets/images/paisanos-flag.svg', () => {
  const PaisanosFlag = () => null
  PaisanosFlag.displayName = 'PaisanosFlag'
  return PaisanosFlag
})

describe('Footer', () => {
  it('renders Footer', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
