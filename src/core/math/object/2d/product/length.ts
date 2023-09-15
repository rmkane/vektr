import type { Object2D } from '../../../../../types'

/**
 * Computes the length (aka magnitude, norm) of a vector.
 *
 * @param {V} vector - A vector
 * @returns {number} The length of the vector
 */
function length2d<V extends Object2D>(vector: V): number {
  return Math.hypot(vector.x, vector.y)
}

export { length2d as lengthObject2d }
