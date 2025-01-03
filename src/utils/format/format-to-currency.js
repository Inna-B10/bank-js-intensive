/**
 * Formats a number as a string with the specified currency symbol
 * @param {number} number - The number to be converted into currency format
 * @returns {string} The formatted number with the currency symbol
 */

export function formatToCurrency(number) {
	return new Intl.NumberFormat('no-NO', {
		currency: 'NOK',
		style: 'currency'
	}).format(number)
}
