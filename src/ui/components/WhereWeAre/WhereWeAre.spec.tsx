import { render } from '@testing-library/react'
import WhereWeAre from '.'

describe('WhereWeAre', () => {
  test('Should show properly places', async () => {
    const wrapper = render(<WhereWeAre />)

    const places = await wrapper.findByTestId('where-we-are-places')

    expect(places).toBeTruthy()
    expect(places.childElementCount).toBe(1)
    expect(places.innerHTML).toBe('18 Cidades <br> &amp; 2 Paises')
  })

  test('Should show properly texts', async () => {
    const wrapper = render(<WhereWeAre />)

    const text = await wrapper.findByTestId('where-we-are-phrase')

    expect(text).toBeTruthy()
    expect(text.childElementCount).toBe(5)
  })
})
