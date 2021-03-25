import { sendEmail } from './sendEmail'

describe('SendEmail service', () => {
  test('should call httpService with correct parameters', async () => {
    const fake_data = {
      company: 'any_company',
      email: 'any_email',
      message: 'any_message',
      name: 'any_name',
      wayOfContact: 'any_wayOfContact',
      phone: 'any_phone'
    }

    const httpService = jest.fn()

    httpService.mockReturnValue({ status: 200 })

    await sendEmail(fake_data, httpService)

    expect(httpService).toBeCalled()
    expect(httpService).toHaveBeenCalledWith('/api/email', {
      method: 'POST',
      body: JSON.stringify(fake_data)
    })
  })

  test('should return response if email was sent succesfully', async () => {
    const fake_data = {
      company: 'any_company',
      email: 'any_email',
      message: 'any_message',
      name: 'any_name',
      wayOfContact: 'any_wayOfContact',
      phone: 'any_phone'
    }

    const httpService = jest.fn()

    httpService.mockReturnValue({
      status: 200,
      message: 'Email was sent successfully'
    })

    const response = await sendEmail(fake_data, httpService)

    expect(response).toEqual({
      status: 200,
      message: 'Email was sent successfully'
    })
  })

  test('should return error response if email was not sent succesfully', async () => {
    const fake_data = {
      company: 'any_company',
      email: 'any_email',
      message: 'any_message',
      name: 'any_name',
      wayOfContact: 'any_wayOfContact',
      phone: 'any_phone'
    }

    const httpService = jest.fn()

    httpService.mockReturnValue({
      status: 500,
      message: 'any_message'
    })

    const response = await sendEmail(fake_data, httpService)

    expect(response).toEqual({
      status: 500,
      message: 'Erro no servidor interno'
    })
  })
})
