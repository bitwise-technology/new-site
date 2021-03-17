import { render } from '@testing-library/react'
import WhereWeAre from '.'

describe('WhereWeAre', () => {
  test('Should show properly places', async () => {
    const wrapper = render(<WhereWeAre />)

    const places = await wrapper.findByText('18 Cidades & 2 Países')

    expect(places).toBeTruthy()
  })
})
