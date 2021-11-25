const Input = ({ type, placeholder, onChange, onEnter, icon }) => {
	return (
		<div className="input">
			{icon ? <ion-icon name={icon}></ion-icon> : null}
			<input className='input-input' type={type} placeholder={placeholder} onChange={onChange} onKeyPress={onEnter} />
		</div>
	)
}

export default Input
