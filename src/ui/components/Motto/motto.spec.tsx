import { render } from '@testing-library/react'
import Motto from '.'

describe('Motto', () => {
  test('Should render title', async () => {
    const wrapper = render(<Motto />)
    const titleText = await wrapper.findByTestId('motto-title')
    expect(titleText.textContent).toBe(
      'Inovação, Design e Tecnologia que transforma!'
    )
  })

  test('Should render paragraph', async () => {
    const wrapper = render(<Motto />)
    const titleText = await wrapper.findByTestId('motto-phrase')
    expect(titleText.textContent).toBe(
      'Design, desenvolvimento ágil, inovação, cultura e liberdade. Nosso desafio é transformar ideias em resultados reais.'
    )
  })

  test('Should render button', () => {
    const { getByText } = render(<Motto />)

    expect(getByText('Falar com um consultor')).toBeTruthy()
  })
})
