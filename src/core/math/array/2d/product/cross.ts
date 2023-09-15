import type { Array2D } from '../../../../../types'

/**
 * Computes the cross product of two vectors.
 *
 * @param {V} left - The left vector operand
 * @param {V} right - The right vector operand
 * @returns {number} The cross product
 */
function cross2d<V extends Array2D>(left: V, right: V): number {
  return left[0] * right[1] - left[1] * right[0]
}

export { cross2d as crossArray2d }
