import { render, fireEvent } from '@testing-library/react'
import Copyright from '.'

describe('Copyright', () => {
  test('Should scroll to top if user clicks "Voltar ao topo"', async () => {
    const wrapper = render(<Copyright />)
    const eventProperties = { preventDefault: jest.fn() }

    const buttonElement = await wrapper.findByText('Voltar ao topo')

    window.scrollTo = jest.fn()

    fireEvent.click(buttonElement, eventProperties)

    expect(window.scrollTo).toBeCalledWith({ top: 0, behavior: 'smooth' })
  })
})
