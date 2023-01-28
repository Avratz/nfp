import { render } from '@testing-library/react'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders default', () => {
    const { container } = render(<Modal closeModal={() => null}>Modal</Modal>)
    expect(container).toMatchSnapshot()
  })
})
