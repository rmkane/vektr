import type { Array2D } from '../../../../../types'

/**
 * Calculates the dot product of two vectors.
 *
 * @param {V} left - The left vector operand
 * @param {V} right - The right vector operand
 * @returns {number} The dot product
 */
function dot2d<V extends Array2D>(left: V, right: V): number {
  return left[0] * right[0] + left[1] * right[1]
}

export { dot2d as dotArray2d }
