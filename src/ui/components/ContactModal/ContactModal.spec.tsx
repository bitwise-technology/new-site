import { fireEvent, render } from '@testing-library/react'
import ContactModalProvider from 'contexts/ContactModal'
import ContactModal from '.'

describe('Contact Modal', () => {
  test('should render with initial state', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const modal = (await wrapper.findByTestId(
      'contact_modal'
    )) as HTMLDivElement

    const inputs = (await wrapper.findAllByTestId(
      'contact_input'
    )) as Array<HTMLInputElement>

    const radioInputs = (await wrapper.findAllByTestId(
      'contact_radio_input'
    )) as Array<HTMLInputElement>

    inputs.forEach((input) => {
      expect(input.value).toBe('')
    })

    radioInputs.forEach((radioInput) => {
      expect(radioInput).not.toBeChecked()
    })

    expect(modal).toHaveAttribute('style', 'transform: scale(0);')
  })

  test('should not be visible in initial render', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const modal = (await wrapper.findByTestId(
      'contact_modal'
    )) as HTMLDivElement

    expect(modal).toHaveAttribute('style', 'transform: scale(0);')
  })

  test('should not be visible if user clicks X', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: true,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const modal = (await wrapper.findByTestId(
      'contact_modal'
    )) as HTMLDivElement

    expect(modal).toHaveAttribute('style', 'transform: scale(1);')

    const closeElement = await wrapper.findByText('X')

    fireEvent.click(closeElement)

    expect(handleCloseModalMock).toHaveBeenCalledWith(false)
  })

  test('should update name input properly', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const input = (await wrapper.findByPlaceholderText(
      'Digite seu nome...'
    )) as HTMLInputElement

    expect(input.value).toBe('')

    fireEvent.change(input, { target: { value: 'any_value' } })

    expect(input.value).toBe('any_value')
  })

  test('should update company input properly', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const input = (await wrapper.findByPlaceholderText(
      'Digite o nome da sua empresa...'
    )) as HTMLInputElement

    expect(input.value).toBe('')

    fireEvent.change(input, { target: { value: 'any_value' } })

    expect(input.value).toBe('any_value')
  })

  test('should update email input properly', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const input = (await wrapper.findByPlaceholderText(
      'Digite seu email...'
    )) as HTMLInputElement

    expect(input.value).toBe('')

    fireEvent.change(input, { target: { value: 'any_value' } })

    expect(input.value).toBe('any_value')
  })

  test('should update phone input properly', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const input = (await wrapper.findByPlaceholderText(
      'Digite seu telefone...'
    )) as HTMLInputElement

    expect(input.value).toBe('')

    fireEvent.change(input, { target: { value: 'any_value' } })

    expect(input.value).toBe('any_value')
  })

  test('should update radio inputs properly', async () => {
    const handleCloseModalMock = jest.fn()

    const wrapper = render(
      <ContactModalProvider
        value={{
          showContactModal: false,
          setShowContactModal: handleCloseModalMock
        }}
      >
        <ContactModal />
      </ContactModalProvider>
    )

    const radioInputs = (await wrapper.findAllByTestId(
      'contact_radio_input'
    )) as HTMLInputElement[]

    radioInputs.forEach((radioInput, index) => {
      expect(radioInput).not.toBeChecked()

      fireEvent.click(radioInput)

      if (radioInputs.length > 1) {
        for (let position = 0; position < index; position++) {
          expect(radioInputs[position]).not.toBeChecked()
        }
      }

      expect(radioInput).toBeChecked()
    })
  })
})
