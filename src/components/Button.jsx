import '../scss/components/button.scss'

const Button = ({ text, mode, onClick }) => {
	return (
		<button className={`button${` ${mode}`}`} onClick={onClick}>{text}</button>
	)
}

export default Button
