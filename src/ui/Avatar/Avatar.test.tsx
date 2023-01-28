import { render } from '@testing-library/react'
import { Avatar } from './Avatar'
import { allAuctions } from '@/__mocks__/auctions'

const avatarSrc = allAuctions[0].authorAvatar
describe('Avatar', () => {
  it('renders default', () => {
    const { container } = render(<Avatar src={avatarSrc} />)
    expect(container).toMatchSnapshot()
  })

  it('renders small', () => {
    const { container } = render(<Avatar src={avatarSrc} size="small" />)
    expect(container).toMatchSnapshot()
  })

  it('renders with custom class', () => {
    const { container } = render(
      <Avatar src={avatarSrc} className="custom-class" />,
    )
    expect(container).toMatchSnapshot()
  })
})
