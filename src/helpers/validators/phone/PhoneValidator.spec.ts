import { validatePhone } from './PhoneValidator'

describe('PhoneValidator', () => {
  test('should return false if phone is invalid', () => {
    const phone = '8468465465'
    const validatorResult = validatePhone(phone)
    expect(validatorResult).toBeFalsy()
  })

  test('should return true if phone is valid', () => {
    const phone = '(84) 99934-7805'
    const validatorResult = validatePhone(phone)
    expect(validatorResult).toBeTruthy()
  })
})
