import { render } from '@testing-library/react'
import { SelectBox, OptionBox } from './SelectBox'

jest.mock('../Icon/Icon', () => {
  function Icon() {
    return <div>u</div>
  }

  Icon.displayName = 'Icon'
  return {
    __esModule: true,
    Icon,
  }
})

describe('SelectBox', () => {
  it('renders default', () => {
    const { container } = render(
      <SelectBox placeholder="Select box" setSelected={() => null}>
        SelectBox
      </SelectBox>,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders with label', () => {
    const { container } = render(
      <SelectBox
        placeholder="Select box"
        setSelected={() => null}
        label="Label"
      >
        SelectBox
      </SelectBox>,
    )
    expect(container).toMatchSnapshot()
  })
})

describe('OptionBox', () => {
  it('renders default', () => {
    const { container } = render(
      <SelectBox placeholder="Select box" setSelected={() => null}>
        <OptionBox value={{ name: 'Option', value: 'option' }}>
          Option
        </OptionBox>
      </SelectBox>,
    )
    expect(container).toMatchSnapshot()
  })
})
