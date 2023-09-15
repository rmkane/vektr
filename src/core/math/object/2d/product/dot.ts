import type { Object2D } from '../../../../../types'

/**
 * Calculates the dot product of two vectors.
 *
 * @param {V} left - The left vector operand
 * @param {V} right - The right vector operand
 * @returns {number} The dot product
 */
function dot2d<V extends Object2D>(left: V, right: V): number {
  return left.x * right.x + left.y * right.y
}

export { dot2d as dotObject2d }
