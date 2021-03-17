import { validateEmail } from './EmailValidator'

describe('EmailValidator', () => {
  test('should return false if email is invalid', () => {
    const email = 'any_email'
    const validatorResult = validateEmail(email)
    expect(validatorResult).toBeFalsy()
  })

  test('should return true if email is valid', () => {
    const email = 'algumemail_valido@gmail.com'
    const validatorResult = validateEmail(email)
    expect(validatorResult).toBeTruthy()
  })
})
