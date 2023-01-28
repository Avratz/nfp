import { RadioGroup } from '@headlessui/react'
import { render } from '@testing-library/react'
import { ToggleButton } from './ToggleButton'

describe('ToggleButton', () => {
  it('renders default', () => {
    const { container } = render(
      <RadioGroup>
        <ToggleButton value="ToggleButton">ToggleButton</ToggleButton>
      </RadioGroup>,
    )
    expect(container).toMatchSnapshot()
  })
})
