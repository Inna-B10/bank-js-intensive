/**
 * Formats a credit card number string by adding dashes(-) after every 4th character
 * @param {string} cardNumber - The credit card number string to format
 * @returns {string} - Returns the formatted credit card number string
 */

export function formatCardNumberWithDashes(cardNumber) {
	return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-')
}
/**
 * Formats a credit card number into the format **** **** **** ****
 * @param {string} cardNumber - The credit card number consisting of16 digits without separators
 * @returns {string} - The formatted credit card number
 */

export function formatCardNumber(cardNumber) {
	const formattedNumber = cardNumber.replace(/\s/g, '').match(/.{1,4}/g)

	return formattedNumber ? formattedNumber.join(' ') : ''
}
