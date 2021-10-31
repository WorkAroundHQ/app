import '../scss/components/button.scss'

const Button = ({ text, mode, onClick, disabled }) => {
	return (
		<button className={`button${` ${mode}`}`} disabled={disabled} onClick={onClick}>{text}</button>
	)
}

export default Button
