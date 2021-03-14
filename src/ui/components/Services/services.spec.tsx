import { render } from '@testing-library/react'
import Services from '.'

describe('Services', () => {
  test('Should render four services', () => {
    const wrapper = render(<Services />)
    const elementsCount = wrapper.getByTestId('services-box').children.length
    expect(elementsCount).toBe(4)
  })

  test('Should render services title', async () => {
    const wrapper = render(<Services />)
    const servicesTitleElement = await wrapper.findByText('Nossos Serviços')
    expect(servicesTitleElement).toBeTruthy()
  })
})
