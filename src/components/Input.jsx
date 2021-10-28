const Input = ({ type, placeholder, onChange, onEnter }) => {
	return (
		<input className='auth-input' type={type} placeholder={placeholder} onChange={onChange} onKeyPress={onEnter} />
	)
}

export default Input
