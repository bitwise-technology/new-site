import { validateEmail } from './EmailValidator'

describe('EmailValidator', () => {
  test('should return false if email is invalid', () => {
    const email = 'any_email'
    const validatorResult = validateEmail(email)
    expect(validatorResult).toBe('invalidEmail')
  })

  test('should return an empty string if email is valid', () => {
    const email = 'algumemail_valido@gmail.com'
    const validatorResult = validateEmail(email)
    expect(validatorResult).toBe('')
  })
})
