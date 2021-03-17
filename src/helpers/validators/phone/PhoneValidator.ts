export const validatePhone = (phone: string) => {
  const regex = /\(\d{2,}\) \d{4,}-\d{4}/

  return regex.test(phone)
}
