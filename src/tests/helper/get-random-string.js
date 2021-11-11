const getRandomString = (length = 8) => {
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

	// Pick characers randomly
	let str = ''
	for (let i = 0; i < length; i++) {
			str += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return str
}

export default getRandomString
