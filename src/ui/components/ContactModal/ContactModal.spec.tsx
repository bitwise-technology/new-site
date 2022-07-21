import { fireEvent, render } from '@testing-library/react'
import ContactModal from '.'
import ContactModalProvider from '../../../contexts/ContactModal'

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

    expect(radioInputs[0]).toBeChecked()
    expect(radioInputs[1]).not.toBeChecked()

    expect(modal).toHaveAttribute(
      'style',
      'visibility: hidden; opacity: 0; top: 50%;'
    )
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

    expect(modal).toHaveAttribute(
      'style',
      'visibility: hidden; opacity: 0; top: 50%;'
    )
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

    expect(modal).toHaveAttribute(
      'style',
      'visibility: visible; opacity: 1; top: 0%;'
    )
    const closeElement = await wrapper.findByAltText('Contact Modal Close Icon')

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

    fireEvent.change(input, { target: { value: '84999347805' } })

    expect(input.value).toBe('(84) 99934-7805')
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
