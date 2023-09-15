import type { Array2D } from '../../../../../types'

/**
 * Computes the length (aka magnitude, norm) of a vector.
 *
 * @param {V} vector - A vector
 * @returns {number} The length of the vector
 */
function length2d<V extends Array2D>(vector: V): number {
  return Math.hypot(vector[0], vector[1])
}

export { length2d as lengthArray2d }
