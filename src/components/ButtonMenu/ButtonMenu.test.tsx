import { render } from '@testing-library/react'
import { ButtonMenu } from './ButtonMenu'

describe('ButtonMenu', () => {
  it('renders ButtonMenu closed', () => {
    const { container } = render(
      <ButtonMenu isOpen={false} setIsOpen={() => null} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders ButtonMenu open', () => {
    const { container } = render(
      <ButtonMenu isOpen={true} setIsOpen={() => null} />,
    )
    expect(container).toMatchSnapshot()
  })
})
