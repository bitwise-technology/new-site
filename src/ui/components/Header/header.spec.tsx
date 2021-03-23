import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('Should show languagens component', () => {
    const languagesElement = screen.getByTestId('languages')
    expect(languagesElement).toBeTruthy()
    expect(languagesElement.children.length).toBe(2)
    expect(languagesElement.textContent).toContain('PT')
    expect(languagesElement.textContent).toContain('EN')
  })
})
