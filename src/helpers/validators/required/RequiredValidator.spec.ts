import { requiredValidator } from './RequiredValidator'

describe('RequiredValidator', () => {
  test('Should return empty string if value is valid', () => {
    const result = requiredValidator('any_value')
    expect(result).toBe('')
  })

  test('Should return an error string if value is invvalid', () => {
    const result = requiredValidator('')
    expect(result).toBe('required')
  })
})
