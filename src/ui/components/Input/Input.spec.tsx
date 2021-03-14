import { fireEvent, render } from '@testing-library/react'
import Input from '.'

describe('Input Component', () => {
  test('Should render input with the properties passed to it', async () => {
    const wrapper = render(
      <Input
        label="any_label"
        id="any_id"
        name="any_name"
        type="any_type"
        data-testid="any_test-id"
      />
    )

    expect(await wrapper.findByTestId('any_test-id')).toBeTruthy()
  })

  test('Should call functions passed to it ', async () => {
    const handleSomething = jest.fn()

    const wrapper = render(
      <Input
        label="any_label"
        id="any_id"
        name="any_name"
        type="any_type"
        data-testid="any_test-id"
        onChange={handleSomething}
      />
    )

    const inputElement = await wrapper.findByTestId('any_test-id')

    fireEvent.change(inputElement, { target: { value: 'any_value' } })

    expect(handleSomething).toBeCalled()
  })
})
