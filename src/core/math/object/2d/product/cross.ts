import type { Object2D } from '../../../../../types'

/**
 * Calculates the cross product of two vectors.
 *
 * @param {V} left - The left vector operand
 * @param {V} right - The right vector operand
 * @returns {number} The cross product
 */
function cross2d<V extends Object2D>(left: V, right: V): number {
  return left.x * right.y - left.y * right.x
}

export { cross2d as crossObject2d }
