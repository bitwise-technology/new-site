interface ContactInfo {
  name: string
  company: string
  email: string
  phone: string
  wayOfContact: string
  message: string
}

enum httpStatus {
  ok = 200
}

export const sendEmail = async (data: ContactInfo, httpService = fetch) => {
  const body = JSON.stringify(data)

  const response = await httpService('/api/email', {
    method: 'POST',
    body
  })

  switch (response.status) {
    case httpStatus.ok: {
      return response
    }
    default: {
      return {
        status: 500,
        message: 'Erro no servidor interno'
      }
    }
  }
}
