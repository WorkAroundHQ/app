import '../scss/components/form-element.scss'

const FormElement = ({ className, id, type, label, value, handleChange, disabled }) => {
	return (
		<div className='form-element'>
			<label htmlFor={id}>{label}</label>
        <input
					className={className}
          id={id}
          type={type}
          value={value || ''}
          onChange={(e) => handleChange(e.target.value)}
					disabled={disabled}
        />
		</div>
	)
}

export default FormElement
