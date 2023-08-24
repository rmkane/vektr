/**
 * Convert any number to a single integer, removing any non-digit values.
 *
 * @param {number} value - The number to hash
 * @returns {number} An integer representing the digits of the given number
 */
function hashNumber(value: number): number {
  return parseInt(value.toString().replace(/\W/g, ''))
}

export { hashNumber }
