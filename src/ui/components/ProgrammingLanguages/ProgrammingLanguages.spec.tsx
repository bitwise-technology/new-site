import { render } from '@testing-library/react'
import ProgrammingLanguages from '.'

describe('Programming Languages', () => {
  test('should render title properly', async () => {
    const wrapper = render(<ProgrammingLanguages />)
    const title = await wrapper.findByText('Nossa Stack')
    expect(title).toBeTruthy()
  })

  test('Should render languages boxes properly', async () => {
    const wrapper = render(<ProgrammingLanguages />)
    const languagesBox = await wrapper.findByTestId('languages')
    expect(languagesBox).toBeTruthy()
    expect(languagesBox.childElementCount).toBe(6)
  })
})
