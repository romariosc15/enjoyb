import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Reviews from '@/app/_components/About-us/reviews'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Reviews />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})