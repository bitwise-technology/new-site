import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('Should show options menu', async () => {
    const element = await screen.findByTestId('navigation')
    expect(element.childElementCount).toBe(4)
    expect(screen.getByText('Sobre')).toBeTruthy()
    expect(screen.getByText('Cases')).toBeTruthy()
    expect(screen.getByText('Contato')).toBeTruthy()
    expect(screen.getByText('Blog')).toBeTruthy()
  })

  test('Should show languagens component', () => {
    const languagesElement = screen.getByTestId('languages')
    expect(languagesElement).toBeTruthy()
    expect(languagesElement.children.length).toBe(2)
    expect(languagesElement.textContent).toContain('PT')
    expect(languagesElement.textContent).toContain('EN')
  })
})
