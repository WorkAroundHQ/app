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
  
	expect(btn).toHaveClass('btn-primary')
})

test('button is in attention colors', () => {
  render(<Button text='Test' mode='danger' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('btn-danger')
})

test('button is in success colors', () => {
  render(<Button text='Test' mode='success' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('btn-success')
})

test('button is in default colors', () => {
  render(<Button text='Test' mode='' disabled={false} onClick={e => console.log(e)} />)
	
	const btn = screen.getByRole('button', { name: /Test/ })
  
	expect(btn).toHaveClass('btn')
})
