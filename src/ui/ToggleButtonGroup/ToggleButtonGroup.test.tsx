import { render } from '@testing-library/react'
import { ToggleButtonGroup } from './ToggleButtonGroup'

describe('ToggleButtonGroup', () => {
  it('renders default', () => {
    const { container } = render(
      <ToggleButtonGroup value="ToggleButtonGroup" onChange={() => null}>
        ToggleButtonGroup
      </ToggleButtonGroup>,
    )
    expect(container).toMatchSnapshot()
  })
})
