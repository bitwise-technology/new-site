export const requiredValidator = (value: string): string =>
  value !== '' ? '' : 'required'
