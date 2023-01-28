import { render, act } from '@testing-library/react'
import { withData, WithDataProps } from './withData'

describe('withData', () => {
  it('should pass data to the wrapped component', async () => {
    const request1 = jest.fn().mockResolvedValue('request1 data')
    const request2 = jest.fn().mockResolvedValue('request2 data')
    const requests = [request1, request2]

    const TestComponent = (props: Omit<WithDataProps, 'requests'>) => (
      <div>{props.data.join(', ')}</div>
    )

    const { findByText } = render(
      await withData(TestComponent)({
        requests,
      }),
    )

    await act(async () => {
      await findByText('request1 data, request2 data')
    })

    expect(request1).toHaveBeenCalled()
    expect(request2).toHaveBeenCalled()
  })
})
