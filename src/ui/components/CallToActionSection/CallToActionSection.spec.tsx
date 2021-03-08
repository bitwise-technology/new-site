import { render } from '@testing-library/react'
import CallToActionSection from '.'

describe('CallToActionSection', () => {
  test('Should show CallToActionSection title', async () => {
    const wrapper = render(<CallToActionSection />)
    const callToActionSectionTitle = await wrapper.findByTestId(
      'CallToActionSectionTitle'
    )

    expect(callToActionSectionTitle.textContent).toBe(
      'O digital é por nossa conta!'
    )
  })

  test('Should show CallToActionSection description', async () => {
    const wrapper = render(<CallToActionSection />)
    const callToActionSectionDescription = await wrapper.findByTestId(
      'CallToActionSectionDescription'
    )

    expect(callToActionSectionDescription.textContent).toBe(
      'Nós nascemos em 2015, para mudar o dia a dia das pessoas através de tecnologia.Hoje, com o mesmo objetivo, impactamos empresas através da nossa experiência e tecnologia em diferentes áreas. Temos uma equipe proativa e disposta a resolver problemas complexos para expandir e escalar o seu negócio.'
    )
  })
})
