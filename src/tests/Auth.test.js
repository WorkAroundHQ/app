import { render, screen } from '@testing-library/react'
import Auth from '../pages/Auth'

test('renders learn react link', () => {
  render(<Auth />)
  const linkElement = screen.getByText('Don\'t have an account? Sign up')
  expect(linkElement).toBeInTheDocument()
})
