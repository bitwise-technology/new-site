import { fireEvent, render } from '@testing-library/react'
import RadioInput from '.'

describe('RadioInput Component', () => {
  test('Should render RadioInput with the properties passed to it', async () => {
    const handleSomething = jest.fn()

    const wrapper = render(
      <RadioInput
        isChecked={false}
        onChange={handleSomething}
        label="any_label"
        id="any_id"
        name="any_name"
        type="any_type"
        data-testid="any_test-id"
      />
    )

    expect(await wrapper.findByTestId('any_test-id')).toBeTruthy()
    expect(await wrapper.findByText('any_label')).toBeTruthy()
  })

  test('Should call functions passed to it ', async () => {
    const handleSomething = jest.fn()
    const wrapper = render(
      <RadioInput
        label="any_label"
        id="any_id"
        name="any_name"
        value="any_value"
        data-testid="any_test-id"
        isChecked={false}
        onChange={handleSomething}
      />
    )

    const labelInputElement = (await wrapper.findByText(
      'any_label'
    )) as HTMLInputElement

    fireEvent.click(labelInputElement)

    expect(handleSomething).toBeCalled()
  })
})
