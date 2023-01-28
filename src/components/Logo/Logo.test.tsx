import { render } from '@testing-library/react'
import { Logo } from './Logo'

jest.mock('@/assets/images/paisanos-flag.svg', () => {
  const PaisanosFlag = () => null
  PaisanosFlag.displayName = 'PaisanosFlag'
  return PaisanosFlag
})

describe('Logo', () => {
  it('renders Logo', () => {
    let { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
