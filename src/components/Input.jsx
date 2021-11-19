const Input = ({ type, placeholder, onChange, onEnter }) => {
	return (
		<input className='input' type={type} placeholder={placeholder} onChange={onChange} onKeyPress={onEnter} />
	)
}

export default Input
