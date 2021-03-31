import { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer')

interface ContactInfo {
  name: string
  company: string
  email: string
  phone: string
  wayOfContact: string
  message: string
  [key: string]: string
}

type Data = {
  status: number
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, company, email, phone, wayOfContact, message } = JSON.parse(
      req.body
    ) as ContactInfo

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'mailerbitwise@gmail.com',
        pass: 'bit@wise@mailer'
      }
    })

    const html = `<p>Olá, sou o ${name}, estou aqui pois necessito de um serviço da bitwise.</p><br/>
      <p>O que eu quero : ${message}</p>
      <p>Em situação de retorno, prefiro que seja contatado por : ${wayOfContact}</p>
      <p>Caso haja alguma duvida, aqui está o meu telefone : ${phone}</p>
      <p>Att. ${name} - ${company}</p>
    `

    // send mail with defined transport object
    await transporter.sendMail({
      from: email, // sender address
      to: 'estevao@bitwise.ltda', // list of receivers
      subject: 'Contato de Cliente', // Subject line
      html: html // html body
    })

    res.status(200).json({
      status: 200,
      message: 'Email was sent correctly'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      message: 'Internal server error'
    })
  }
}
