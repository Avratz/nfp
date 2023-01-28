import { render } from '@testing-library/react'
import { Header } from './Header'

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null
  DynamicComponent.displayName = 'LoadableComponent'
  DynamicComponent.preload = jest.fn()
  return DynamicComponent
})

jest.mock('../../assets/images/paisanos-flag.svg', () => {
  const PaisanosFlag = () => null
  PaisanosFlag.displayName = 'PaisanosFlag'
  return PaisanosFlag
})

describe('Header', () => {
  it('renders Header unchanged', () => {
    let { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
