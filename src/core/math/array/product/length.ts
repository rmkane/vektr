import type { Array2D } from '../../../../types'

/**
 * TBD
 *
 * @param {Array2D} vector
 * @returns {number}
 */
function length(vector: Array2D): number {
  return Math.hypot(vector[0], vector[1])
}

export { length as lengthArray }
