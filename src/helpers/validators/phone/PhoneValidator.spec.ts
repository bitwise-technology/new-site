import { validatePhone } from './PhoneValidator'

describe('PhoneValidator', () => {
  test('should return a string if phone is invalid', () => {
    const phone = '8468465465'
    const validatorResult = validatePhone(phone)
    expect(validatorResult).toBe('invalidPhone')
  })

  test('should return empty string if phone is valid', () => {
    const phone = '(84) 99934-7805'
    const validatorResult = validatePhone(phone)
    expect(validatorResult).toBe('')
  })
})
