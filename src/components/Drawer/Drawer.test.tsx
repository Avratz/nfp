import { render } from '@testing-library/react'
import { Drawer } from './Drawer'

jest.mock('@/ui/Icon/Icon', () => {
  function Icon() {
    return <div>u</div>
  }

  Icon.displayName = 'Icon'
  return {
    __esModule: true,
    Icon,
  }
})

describe('Drawer', () => {
  it('renders Drawer closed', () => {
    const { container } = render(<Drawer isOpen={false} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Drawer open', () => {
    const { container } = render(<Drawer isOpen />)
    expect(container).toMatchSnapshot()
  })
})
