const Input = ({ type, placeholder, onChange }) => {
	return (
		<input className='auth-input' type={type} placeholder={placeholder} onChange={onChange} />
	)
}

export default Input
