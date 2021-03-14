import { render } from '@testing-library/react'
import Partners from '.'

describe('Partners', () => {
  test('Should render partners title', async () => {
    const wrapper = render(<Partners />)
    const partnersTitle = await wrapper.findByText('Onde levamos a inovação')
    expect(partnersTitle.textContent).toBe('Onde levamos a inovação')
  })

  test('Should render partners image', async () => {
    const wrapper = render(<Partners />)
    const partnersImage = await wrapper.findByAltText(
      'Marcas que já utilizaram algum serviço'
    )
    expect(partnersImage).toBeTruthy()
  })
})
