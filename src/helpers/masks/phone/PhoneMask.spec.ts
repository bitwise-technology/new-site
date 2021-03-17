import { phoneMask } from './PhoneMask'

describe('PhoneMask', () => {
  test('should return phone with mask', () => {
    const phone = '84999347805'
    const maskResult = phoneMask(phone)
    expect(maskResult).toBe('(84) 99934-7805')
  })
})
