const FooterLink = ({ link, text }: {link: string, text: string}) => {
	return (
		<a href={link}>{text}</a>
	)
}

export default FooterLink
