import '../scss/components/switch.scss'

const Switch = ({ className, id, label, value, handleChange, disabled }) => {
	return (
		<div className='form-element'>
			<label htmlFor={id}>{label}</label>
			<label className="switch" htmlFor={id}>
				<input
					className={className}
					id={id}
					type="checkbox"
					value={value}
					onChange={(e) => handleChange(e.target.checked)}
					disabled={disabled}
					/>
				<div className="slider round"></div>
			</label>
		</div>
	)
}

export default Switch
