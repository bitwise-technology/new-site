import { render } from '@testing-library/react'
import BitwiseInfo from '.'

describe('BitwiseInfo', () => {
  test('Should show two addresses', async () => {
    const wrapper = render(<BitwiseInfo />)
    const addresses = await wrapper.findAllByTestId('address')
    expect(addresses.length).toBe(2)
  })
})
