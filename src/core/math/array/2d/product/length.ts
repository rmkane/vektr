import type { Array2D } from '../../../../../types'

/**
 * TBD
 *
 * @param {V} vector
 * @returns {number}
 */
function length2d<V extends Array2D>(vector: V): number {
  return Math.hypot(vector[0], vector[1])
}

export { length2d as lengthArray2d }
