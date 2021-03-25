import { fireEvent, render } from '@testing-library/react'
import ContactModalResponseProvider from 'contexts/ModalResponse'
import ModalResponse from '.'

describe('ModalReponse', () => {
  test('should render properly based on status if status 200', async () => {
    const setShowContactModalResponse = jest.fn()
    const setStatusCode = jest.fn()

    const showContactModalResponse = true

    const wrapper = render(
      <ContactModalResponseProvider
        value={{
          statusCode: 200,
          setShowContactModalResponse,
          setStatusCode,
          showContactModalResponse
        }}
      >
        <ModalResponse />
      </ContactModalResponseProvider>
    )

    const title = wrapper.findByText('Obrigado !')
    const text = wrapper.findByText('Em breve entramos em contato')

    expect(title).toBeTruthy()
    expect(text).toBeTruthy()
  })

  test('should render properly based on status if status 500', async () => {
    const setShowContactModalResponse = jest.fn()
    const setStatusCode = jest.fn()

    const showContactModalResponse = true

    const wrapper = render(
      <ContactModalResponseProvider
        value={{
          statusCode: 500,
          setShowContactModalResponse,
          setStatusCode,
          showContactModalResponse
        }}
      >
        <ModalResponse />
      </ContactModalResponseProvider>
    )

    const title = wrapper.findByText('SHIIIIIII !')
    const text = wrapper.findByText(
      'Nosso servidor de e-mail está passando por manutenção'
    )

    expect(title).toBeTruthy()
    expect(text).toBeTruthy()
  })

  test('should emit correct value if user closes modal', async () => {
    const setShowContactModalResponse = jest.fn()
    const setStatusCode = jest.fn()

    const showContactModalResponse = true

    const wrapper = render(
      <ContactModalResponseProvider
        value={{
          statusCode: 500,
          setShowContactModalResponse,
          setStatusCode,
          showContactModalResponse
        }}
      >
        <ModalResponse />
      </ContactModalResponseProvider>
    )

    const button = await wrapper.findByAltText('Close button')

    fireEvent.click(button)

    expect(setShowContactModalResponse).toBeCalledWith(false)
  })
})
