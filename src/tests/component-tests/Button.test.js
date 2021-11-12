import { render, screen } from '@testing-library/react'
import Button from '../../components/Button'

test('button is disabled', () => {
  render(<Button text='Test' mode='primary' disabled={true} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toBeDisabled()
})

test('button is enabled', () => {
  render(<Button text='Test' mode='primary' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toBeEnabled()
})

test('button is in primary colors', () => {
  render(<Button text='Test' mode='primary' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('primary')
})

test('button is in attention colors', () => {
  render(<Button text='Test' mode='attention' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('attention')
})

test('button is in success colors', () => {
  render(<Button text='Test' mode='success' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('success')
})

test('button is in default colors', () => {
  render(<Button text='Test' mode='' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('button')
})
