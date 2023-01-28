import { render } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders Hero', () => {
    const { container } = render(<Hero />)
    expect(container).toMatchSnapshot()
  })
})
